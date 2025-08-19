// Evita MaxListenersExceededWarning
require("events").EventEmitter.defaultMaxListeners = 20;

const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const http = require("http");
// const { Server } = require("socket.io");
// const cron = require("node-cron");

const connectToDatabase = require("./src/database/connect");
const ReminderModel = require("./src/models/reminder.model");

const userControl = require("./src/routes/userControl");
const taskControl = require("./src/routes/taskControl");
const reminderControl = require("./src/routes/reminderControl");
const subscriptionControl = require("./src/routes/subscriptionControl");

config();

const { PORT = 4000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;

const app = express();
const server = http.createServer(app); // unifica API e Socket.IO

// // Socket.IO
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// Middleware
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const webPush = require("web-push");

webPush.setVapidDetails(
  "mailto:dev123gabriel@gmail.com",
  "BHLOs2Z5r8k7u7bmOKqrMfnBQuOWnEc8bI2hJW-vTGHp4aNnNibOftiHa1R62CfoIbjTaaKhlBlNxUj4K54K_-k", // chave pública
  "W8FNlXzA8YP43KqsJk7lzCDmgzbIB7VPb2caDusJqB4" // chave privada
);

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Conecta ao MongoDB
connectToDatabase();

// Rotas
app.use(userControl);
app.use(taskControl);
app.use(reminderControl);
app.use(subscriptionControl);

const SubscriptionModel = require("./src/models/subscription.model");
const cron = require("node-cron");

// exemplo: enviar notificações de lembretes do dia
async function sendDailyReminders() {
  const hojeStr = new Date().toISOString().slice(0, 10);

  const lembretes = await ReminderModel.find({
    remindAt: hojeStr,
    notificado: false,
  });

  for (const lembrete of lembretes) {
    const sub = await SubscriptionModel.findOne({ userID: lembrete.userID });

    try {
      await webPush.sendNotification(
        sub.subscription,
        JSON.stringify({
          title: lembrete?.title || "Lembrete",
          message: lembrete?.description,
        })
      );

      lembrete.notificado = true;
      await lembrete.save();
      console.log(lembrete);
    } catch (err) {
      if (err.statusCode === 410 || err.statusCode === 404) {
        console.log(`Subscription expirada ou removida. Deletando...`);
        await SubscriptionModel.deleteOne({ userID: lembrete.userID });
      } else {
        console.error("Erro ao enviar notificação:", err);
      }
    }
  }
}

// roda a cada minuto
cron.schedule("* * * * *", async () => {
  console.log("🔔 Checando lembretes do dia...");
  await sendDailyReminders();
});

// // 🔹 Armazena sockets por usuário
// const userSockets = new Map();

// // 🔹 Conexão com o cliente
// io.on("connection", (socket) => {
//   console.log("🔌 Usuário conectado ao Socket.IO");

//   // Registro do usuário
//   socket.on("registrarUsuario", (userID) => {
//     userSockets.set(userID, socket);
//     console.log(`📌 Socket registrado para o usuário: ${userID}`);
//   });

//   // Desconexão
//   socket.on("disconnect", () => {
//     for (const [userID, s] of userSockets.entries()) {
//       if (s === socket) {
//         userSockets.delete(userID);
//         console.log(`❌ Usuário ${userID} desconectado`);
//         break;
//       }
//     }
//   });
// });

// // 🔹 Cron job: verifica lembretes a cada minuto
// cron.schedule("* * * * *", async () => {
//   const hoje = new Date();
//   hoje.setHours(0, 0, 0, 0); // ajusta para o início do dia (00:00)

//   const amanha = new Date(hoje);
//   amanha.setDate(hoje.getDate() + 1); // pega o início do próximo dia

//   try {
//     // Busca lembretes do dia que ainda não foram notificados
//     const hojeStr = new Date().toISOString().slice(0, 10); // "2025-08-18"
//     const lembretes = await ReminderModel.find({
//       remindAt: hojeStr,
//       notificado: false,
//     });

//     console.log(lembretes, "lembretes");
//     console.log(hojeStr, "hojeStr");

//     for (const lembrete of lembretes) {
//       const socket = userSockets.get(lembrete.userID); // pega o socket do usuário
//       console.log(socket, "socket");

//       if (socket) {
//         socket.emit("lembrete", {
//           titulo: lembrete.title || "Lembrete",
//           mensagem: lembrete.description || "Você tem um lembrete hoje!",
//         });
//         console.log(lembrete, "lembrete");

//         // Marca o lembrete como enviado
//         lembrete.notificado = true;
//         await lembrete.save();
//       }
//     }
//   } catch (err) {
//     console.error("Erro ao buscar lembretes:", err.message);
//   }
// });

// 🔹 Inicializa servidor unificado
server.listen(PORT, LOCAL_ADDRESS, () => {
  console.log(`🟢 Servidor rodando em http://${LOCAL_ADDRESS}:${PORT}`);
});
