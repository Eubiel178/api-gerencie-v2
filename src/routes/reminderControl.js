const ReminderModel = require("../models/reminder.model");
const { Router } = require("express");

const router = Router();

// Criar novo lembrete
router.post("/reminders", async (req, res) => {
  try {
    const { body } = req;

    const reminder = await ReminderModel.create(body);

    res.status(200).json({ status: "OK", reminder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", errorMessage: error.message });
  }
});

// Listar lembretes por usuário
router.get("/reminders/user-id/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const list = await ReminderModel.find({ userID: id }).sort({
      createdAt: -1,
    });

    res.status(200).json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", error });
  }
});

// Editar lembrete (PATCH)
router.patch("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await ReminderModel.findByIdAndUpdate(id, body);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", error });
  }
});

// Atualizar lembrete completo (PUT)
router.put("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await ReminderModel.findByIdAndUpdate(id, body);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", error });
  }
});

// Deletar lembrete
router.delete("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await ReminderModel.findByIdAndDelete(id);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", error });
  }
});

module.exports = router;
