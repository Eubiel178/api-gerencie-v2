console.log("EVENT", event);

let input = event.preview || "";
console.log(` ------------------------------- ${input}`);

const match = input.match(/\|\s*(.*)$/);

let userInput = "";
if (match && match[1]) {
  userInput = match[1].trim().toLowerCase();
} else {
  userInput = input.trim().toLowerCase();
}

let options = [...workflow.options, "finalizar", "transbordo"];
let intent = null;

try {
  console.log("Iniciando validação de intenções");

  for (const option of options) {
    if (option === "ticket_sports") {
      const array_ticket_sports = [
        "ticket sports",
        "ticketsports",
        "opcao ticket sports",
        "opcao ticketsports",
        "escolho ticket sports",
        "quero ticket sports",
        "vou de ticket sports",
        "seleciono ticket sports",
        "optei por ticket sports",
        "escolher ticket sports",
        "resposta ticket sports",
        "digitei ticket sports",
        "marcar ticket sports",
      ];
      if (array_ticket_sports.includes(userInput)) {
        intent = "ticket_sports";
        break;
      }
    }

    if (option === "zet") {
      const array_zet = [
        "zet",
        "opcao zet",
        "escolho zet",
        "quero zet",
        "vou de zet",
        "seleciono zet",
        "optei por zet",
        "resposta zet",
        "digitei zet",
        "marcar zet",
      ];
      if (array_zet.includes(userInput)) {
        intent = "zet";
        break;
      }
    }

    if (option === "compra_em_lote") {
      const array_compra_em_lote = [
        "compra em lote",
        "comprar em lote",
        "lote",
        "quero compra em lote",
        "quero comprar em lote",
        "vou de compra em lote",
        "opcao compra em lote",
        "escolho compra em lote",
        "seleciono compra em lote",
        "resposta compra em lote",
        "digitei compra em lote",
        "marcar compra em lote",
        "optei por compra em lote",
      ];
      if (array_compra_em_lote.includes(userInput)) {
        intent = "compra_em_lote";
        break;
      }
    }

    if (option === "recomendacoes_dia_evento") {
      const array_recomendacoes = [
        "recomendacoes dia do evento",
        "recomendacoes para o evento",
        "o que fazer no dia do evento",
        "cuidados no dia do evento",
        "dicas para o evento",
        "dicas do evento",
        "instrucoes para o evento",
        "orientacoes do evento",
        "orientacoes para o dia",
        "orientacoes pro evento",
        "regras do evento",
        "como me preparar para o evento",
        "como se preparar para o evento",
        "preparar para o evento",
        "preparo para o evento",
        "como ir no evento",
        "o que levar no evento",
        "o que vestir no evento",
        "como se vestir no evento",
        "coisas importantes pro evento",
        "informacoes pro evento",
        "informacoes sobre o evento",
        "detalhes do evento",
        "o que precisa pro evento",

        // Novas variações adicionadas
        "tem alguma dica pro dia",
        "tem algo que preciso saber",
        "o que eu tenho que fazer no dia",
        "como funciona no dia",
        "como vai ser no dia",
        "me explica como vai ser",
        "me fala como vai ser o evento",
        "o que eu tenho que levar",
        "tem alguma regra",
        "tem alguma orientacao",
        "tem alguma instrucao",
        "tem alguma coisa que nao pode",
        "tem restricao no evento",
        "tem alguma preparacao pro evento",
        "tenho que levar alguma coisa",
        "o que eu uso no evento",
        "posso levar mochila",
        "posso entrar com comida",
        "que horas eu chego no evento",
        "qual o horario ideal pra chegar",
        "me passa o que preciso saber",
        "quais cuidados devo ter no evento",
        "o que nao pode no evento",
        "tem lista de recomendacoes",
        "tem alguma recomendacao importante",
      ];

      if (array_recomendacoes.includes(userInput)) {
        intent = "recomendacoes_dia_evento";
        break;
      }
    }

    if (option === "entregas_kit") {
      const array_entregas_kit = [
        "entrega do kit",
        "entregas kit",
        "quando recebo o kit",
        "kit entrega",
        "retirada do kit",
        "como retiro o kit",
        "local da entrega do kit",
        "onde retiro o kit",
        "data da entrega do kit",
        "horario da entrega do kit",
        "informacoes da entrega do kit",
        "como funciona a entrega do kit",
        "onde buscar o kit",
        "quando buscar o kit",
        "vou receber o kit quando",
        "vou retirar o kit onde",
        "qual o horario pra pegar o kit",
        "qual o local da retirada",
        "precisa agendar a retirada do kit",
        "como pego meu kit",
        "quero saber da entrega do kit",
        "quando vai ser a entrega do kit",
        "qual a data pra buscar o kit",
        "que dia pego o kit",
        "que dia retiro o kit",
        "entrega do material",
        "distribuicao dos kits",
        "como retiro meu kit do evento",
        "detalhes sobre a entrega do kit",
        "preciso pegar o kit onde",
        "aonde buscar o kit",
        "kit vai ser entregue como",
        "tem entrega de kit",
        "informacoes sobre o kit",
        "tem que buscar o kit onde",
        "como recebo o kit",
        "retirada presencial do kit",
        "ponto de entrega do kit",
        "preciso ir onde pra pegar o kit",
      ];

      if (array_entregas_kit.includes(userInput)) {
        intent = "entregas_kit";
        break;
      }
    }

    if (option === "modalidades") {
      const array_modalidades = [
        "modalidades", // próprio texto incluído
        "quais sao as modalidades",
        "modalidades disponiveis",
        "tem quais modalidades",
        "categorias do evento",
        "quero saber as modalidades",
        "informacoes sobre as modalidades",
        "quero ver as categorias",
        "modalidades do evento",
        "categoria de corrida",
        "modalidades de participacao",
        "tipos de modalidade",
        "quero saber as categorias",
        "tem mais de uma modalidade",
        "quais categorias tem",
        "o evento tem quais tipos",
        "divisao por modalidade",
        "quais opcoes de modalidade",
        "modalidade corrida caminhada",
        "tem caminhada tambem",
        "quero participar de qual modalidade",
        "tem opcao de caminhada",
        "tem categoria kids",
        "tem infantil",
        "tem opcao kids",
        "quero saber se tem 5km",
        "tem 10km",
        "tem prova de 21km",
        "provas disponiveis",
        "quais distancias tem",
        "tem corrida e caminhada",
        "quero saber as modalidades do evento",
        "me fala as modalidades",
        "me passa as modalidades",
        "como esta dividido o evento",
        "quais provas tem",
        "tem 5km 10km 21km",
        "quais opcoes de corrida",
        "quais provas posso participar",
        "tem alguma modalidade diferente",
        "tem corrida de rua",
        "tem corrida de trilha",
        "quais tipos de corrida",
        "quais modalidades esportivas",
        "tem categoria masculina feminina",
        "tem categoria junior senior",
        "tem varias distancias",
        "tem opcao de caminhada ou corrida",
        "quero ver as provas",
        "quais modalidades tem para iniciantes",
        "quais modalidades tem para avancados",
        "tem modalidades para criancas",
        "tem modalidades para adultos",
        "tem modalidades individuais",
        "tem modalidades em equipe",
        "tem modalidades mistas",
        "tem modalidades especiais",
        "quero detalhes das modalidades",
        "quero escolher a modalidade",
        "quais provas posso escolher",
        "me explica as modalidades",
      ];

      if (array_modalidades.includes(userInput)) {
        intent = "modalidades";
        break;
      }
    }

    if (option === "premiacao") {
      const array_premiacao = [
        "premiacao", // próprio texto incluído
        "premiacao do evento",
        "premios",
        "premios do evento",
        "premios e medalhas",
        "quero saber sobre a premiacao",
        "quero detalhes da premiacao",
        "como funciona a premiacao",
        "informacoes sobre a premiacao",
        "medalhas",
        "trofeus",
        "entrega de premios",
        "recompensas do evento",
        "quem ganha o que",
        "premiacao para os vencedores",
        "premiacao dos primeiros colocados",
        "premiacao por categoria",
        "premiacao individual",
        "premiacao em equipe",
        "premiacao geral",
        "premiacao especial",
        "como e feita a premiacao",
        "quando ocorre a premiacao",
        "premiacao final",
        "premiacao do campeonato",
        "premiacao corrida",
        "quais premios",
        "lista de premios",
        "medalhas e trofeus",
        "premiacao do evento de corrida",
      ];

      if (array_premiacao.includes(userInput)) {
        intent = "premiacao";
        break;
      }
    }

    if (option === "trajeto") {
      const array_trajeto = [
        "trajeto", // próprio texto incluído
        "informacoes sobre o trajeto",
        "detalhes do trajeto",
        "como e o trajeto",
        "mapa do trajeto",
        "rota do trajeto",
        "trajeto da corrida",
        "trajeto do evento",
        "quero ver o trajeto",
        "quero detalhes do trajeto",
        "trajeto completo",
        "onde passa o trajeto",
        "trajeto por etapas",
        "trajeto por categorias",
        "distancia do trajeto",
        "desnivel do trajeto",
        "trajeto e percurso",
        "mapa do percurso",
        "roteiro do trajeto",
        "trajeto da prova",
        "informacoes sobre a prova",
        "como e a prova",
        "trajeto da corrida do evento",
        "detalhes do percurso",
        "quero saber sobre o trajeto",
        "trajeto para participantes",
        "trajeto oficial",
        "trajeto para caminhada",
        "trajeto para corrida",
        "qual o trajeto",
        "onde e o trajeto",
      ];

      if (array_trajeto.includes(userInput)) {
        intent = "trajeto";
        break;
      }
    }

    if (option === "corrida_5km") {
      const array_corrida_5km = [
        "corrida 5 km", // próprio texto incluído
        "corrida 5km",
        "prova de corrida 5 km",
        "prova de corrida 5km",
        "categoria corrida 5 km",
        "categoria corrida 5km",
        "participar corrida 5 km",
        "participar corrida 5km",
        "inscricao corrida 5 km",
        "inscricao corrida 5km",
        "trajeto da corrida 5 km",
        "trajeto da corrida 5km",
        "rota da corrida 5 km",
        "rota da corrida 5km",
        "mapa da corrida 5 km",
        "mapa da corrida 5km",
        "detalhes da corrida 5 km",
        "detalhes da corrida 5km",
        "informacoes da corrida 5 km",
        "informacoes da corrida 5km",
        "quero correr a corrida 5 km",
        "quero correr a corrida 5km",
        "como funciona a corrida 5 km",
        "como funciona a corrida 5km",
      ];

      if (array_corrida_5km.includes(userInput)) {
        intent = "corrida_5km";
        break;
      }
    }

    if (option === "corrida_10km") {
      const array_corrida_10km = [
        "corrida 10 km", // próprio texto incluído
        "corrida 10km",
        "prova de corrida 10 km",
        "prova de corrida 10km",
        "categoria corrida 10 km",
        "categoria corrida 10km",
        "participar corrida 10 km",
        "participar corrida 10km",
        "inscricao corrida 10 km",
        "inscricao corrida 10km",
        "trajeto da corrida 10 km",
        "trajeto da corrida 10km",
        "rota da corrida 10 km",
        "rota da corrida 10km",
        "mapa da corrida 10 km",
        "mapa da corrida 10km",
        "detalhes da corrida 10 km",
        "detalhes da corrida 10km",
        "informacoes da corrida 10 km",
        "informacoes da corrida 10km",
        "quero correr a corrida 10 km",
        "quero correr a corrida 10km",
        "como funciona a corrida 10 km",
        "como funciona a corrida 10km",
      ];

      if (array_corrida_10km.includes(userInput)) {
        intent = "corrida_10km";
        break;
      }
    }

    if (option === "caminhada_5km") {
      const array_caminhada_5km = [
        "caminhada 5 km", // próprio texto incluído
        "caminhada 5km",
        "prova de caminhada 5 km",
        "prova de caminhada 5km",
        "categoria caminhada 5 km",
        "categoria caminhada 5km",
        "participar caminhada 5 km",
        "participar caminhada 5km",
        "inscricao caminhada 5 km",
        "inscricao caminhada 5km",
        "trajeto da caminhada 5 km",
        "trajeto da caminhada 5km",
        "rota da caminhada 5 km",
        "rota da caminhada 5km",
        "mapa da caminhada 5 km",
        "mapa da caminhada 5km",
        "detalhes da caminhada 5 km",
        "detalhes da caminhada 5km",
        "informacoes da caminhada 5 km",
        "informacoes da caminhada 5km",
        "quero participar da caminhada 5 km",
        "quero participar da caminhada 5km",
        "como funciona a caminhada 5 km",
        "como funciona a caminhada 5km",
      ];

      if (array_caminhada_5km.includes(userInput)) {
        intent = "caminhada_5km";
        break;
      }
    }

    if (option === "caominhada_5km") {
      const array_caominhada_5km = [
        "caominhada", // próprio texto incluído
        "caominhada 5 km",
        "caominhada 5km",
        "prova de caominhada 5 km",
        "prova de caominhada 5km",
        "categoria caominhada 5 km",
        "categoria caominhada 5km",
        "participar caominhada 5 km",
        "participar caominhada 5km",
        "inscricao caominhada 5 km",
        "inscricao caominhada 5km",
        "trajeto da caominhada 5 km",
        "trajeto da caominhada 5km",
        "rota da caominhada 5 km",
        "rota da caominhada 5km",
        "mapa da caominhada 5 km",
        "mapa da caominhada 5km",
        "detalhes da caominhada 5 km",
        "detalhes da caominhada 5km",
        "informacoes da caominhada 5 km",
        "informacoes da caominhada 5km",
        "quero participar da caominhada 5 km",
        "quero participar da caominhada 5km",
        "como funciona a caominhada 5 km",
        "como funciona a caominhada 5km",
        // exemplos relacionados a cachorro, dono e pet
        "participar com meu cachorro",
        "levar meu pet",
        "cachorro permitido",
        "dono e cachorro",
        "cachorro e dono",
        "pet na caominhada",
        "quero ir com meu cachorro",
        "evento para donos de cachorro",
        "evento pet friendly",
        "caominhada com cachorro",
        "trazer cachorro",
        "levar pet para caminhada",
        "participar com meu cachorro de estimação",
        // variações de fala
        "caôminhada 5 km",
        "cão minhada 5 km",
        "cãominhada 5 km",
        "caminhada com cachorro 5 km",
        "caminhada com meu cachorro",
        "caminhada pet 5 km",
        "caminhada pet friendly 5 km",
      ];

      if (array_caominhada_5km.includes(userInput)) {
        intent = "caominhada_5km";
        break;
      }
    }

    if (option === "categoria_60mais") {
      const array_categoria_60mais = [
        "60+", // próprio texto incluído
        "60 mais",
        "sessenta",
        "categoria 60+",
        "categoria 60 mais",
        "categoria sessenta",
        "participar 60+",
        "participar 60 mais",
        "participar sessenta",
        "inscricao 60+",
        "inscricao 60 mais",
        "inscricao sessenta",
        "prova 60+",
        "prova 60 mais",
        "prova sessenta",
        "corrida 60+",
        "corrida 60 mais",
        "corrida sessenta",
        "caminhada 60+",
        "caminhada 60 mais",
        "caminhada sessenta",
        "categoria para maiores de 60",
        "participar categoria 60+",
        "participar categoria 60 mais",
        "participar categoria sessenta",
        "informacoes sobre 60+",
        "informacoes sobre sessenta",
        "detalhes da categoria 60+",
        "detalhes da categoria sessenta",
        "como funciona a categoria 60+",
        "como funciona a categoria sessenta",
      ];

      if (array_categoria_60mais.includes(userInput)) {
        intent = "categoria_60mais";
        break;
      }
    }

    if (option === "categoria_menor18") {
      const array_categoria_menor18 = [
        "menor de 18", // próprio texto incluído
        "menor de 18 anos",
        "categoria menor de 18",
        "categoria menor de 18 anos",
        "participar menor de 18",
        "participar menor de 18 anos",
        "inscricao menor de 18",
        "inscricao menor de 18 anos",
        "prova menor de 18",
        "prova menor de 18 anos",
        "corrida menor de 18",
        "corrida menor de 18 anos",
        "caminhada menor de 18",
        "caminhada menor de 18 anos",
        "categoria para menores de 18",
        "menores de 18",
        "participar categoria menor de 18",
        "informacoes sobre menor de 18",
        "detalhes da categoria menor de 18",
        "como funciona a categoria menor de 18",
        "dezoito",
        "categoria dezoito anos",
        "participar dezoito anos",
      ];

      if (array_categoria_menor18.includes(userInput)) {
        intent = "categoria_menor18";
        break;
      }
    }

    if (option === "categoria_pcd") {
      const array_categoria_pcd = [
        "pcd", // próprio texto incluído
        "categoria pcd",
        "participar pcd",
        "inscricao pcd",
        "prova pcd",
        "corrida pcd",
        "caminhada pcd",
        "categoria para pcd",
        "informacoes sobre pcd",
        "detalhes da categoria pcd",
        "como funciona a categoria pcd",
        "participar da corrida pcd",
        "participar da caminhada pcd",
        "inscricao na categoria pcd",
        "categoria deficiente",
        "categoria deficiente fisico",
        "deficiente fisico",
        "categoria especial",
        "participar categoria especial",
      ];

      if (array_categoria_pcd.includes(userInput)) {
        intent = "categoria_pcd";
        break;
      }
    }

    if (option === "categoria_geral") {
      const array_categoria_geral = [
        "geral", // próprio texto incluído
        "categoria geral",
        "participar geral",
        "inscricao geral",
        "prova geral",
        "corrida geral",
        "caminhada geral",
        "informacoes categoria geral",
        "detalhes categoria geral",
        "como funciona a categoria geral",
        "participar da corrida geral",
        "participar da caminhada geral",
        "inscricao na categoria geral",
        "categoria aberta",
        "categoria unica",
        "categoria normal",
      ];

      if (array_categoria_geral.includes(userInput)) {
        intent = "categoria_geral";
        break;
      }
    }

    if (option === "voltar") {
      const array_voltar = [
        "voltar",
        "quero voltar",
        "volta",
        "volta ai",
        "como volto",
        "retornar",
        "quero retornar",
        "retorna",
        "voltar pro menu",
        "voltar ao menu",
        "voltar ao inicio",
        "voltar pro inicio",
        "voltar pro comeco",
        "voltar ao comeco",
        "voltar etapa",
        "voltar uma etapa",
        "voltar tela",
        "voltar tela anterior",
        "menu anterior",
        "etapa anterior",
        "tela anterior",
        "volta uma tela",
        "voltar opcao",
        "ir pra tras",
        "voltar atras",
        "desfazer",
        "cancelar escolha",
        "refazer escolha",
        "voltar escolha",
        "voltar opcoes",
        "voltar onde estava",
        "quero ir pra tras",
        "voltar tudo",
        "resetar",
        "resetar conversa",
        "comecar de novo",
        "voltar pro comeco",
        "reiniciar",
        "reiniciar processo",
        "resetar atendimento",
        "volta por favor",
        "tem como voltar",
        "volta tudo",
        "quero desfazer",
        "quero recomeçar",
        "recomeçar",
        "ir para o inicio",
      ];
      if (array_voltar.includes(userInput)) {
        intent = "voltar";
        break;
      }
    }

    if (option === "transbordo") {
      const array_transbordo = [
        "transbordo",
        "transferir",
        "transferencia",
        "quero ser transferido",
        "quero transferir",
        "pode transferir",
        "me transfere",
        "me transfira",
        "me passe para outro setor",
        "me encaminha",
        "encaminhar",
        "encaminha pro atendimento",
        "encaminha para atendente",
        "encaminha pro atendente",
        "chamar atendente",
        "falar com atendente",
        "preciso de um atendente",
        "preciso falar com alguem",
        "quero falar com humano",
        "quero falar com uma pessoa",
        "quero atendimento humano",
        "me ajuda um atendente",
        "passa pro atendente",
        "me atende um humano",
        "me passa pro humano",
        "quero ajuda humana",
        "atendente por favor",
        "preciso de ajuda humana",
        "pessoa real",
        "humano",
        "tem atendente ai",
        "tem como falar com atendente",
        "conectar com atendente",
        "conectar com humano",
        "pode me transferir",
        "fala com pessoa",
        "pode ser um humano",
        "quero suporte humano",
        "me liga um atendente",
        "passa pra central",
        "central de atendimento",
        "reclamar com atendente",
        "falar com pessoa real",
        "me joga pro atendente",
        "quero suporte de verdade",
        "socorro humano",
        "socorro atendente",
        "resolve com atendente",
        "quero resolver com pessoa",
      ];
      if (array_transbordo.includes(userInput)) {
        intent = "transbordo";
        break;
      }
    }

    if (option === "finalizar") {
      const array_finalizar = [
        "finalizar",
        "finalizar atendimento",
        "finalizar conversa",
        "finaliza ai",
        "finaliza",
        "quero finalizar",
        "pode finalizar",
        "encerra",
        "encerrar",
        "encerrar atendimento",
        "encerrar a conversa",
        "encerrar o atendimento",
        "quero encerrar",
        "pode encerrar",
        "pode encerrar atendimento",
        "pode encerrar a conversa",
        "fim",
        "final",
        "acabar",
        "quero acabar",
        "quero sair",
        "sair",
        "pode sair",
        "ja resolvi",
        "resolvido",
        "esta resolvido",
        "encerra o atendimento",
        "encerre o atendimento",
        "encerra pra mim",
        "terminar",
        "pode terminar",
        "terminar atendimento",
        "quero terminar",
        "finaliza o atendimento",
        "encerra essa conversa",
        "acabou",
        "acabou pra mim",
        "ja era",
        "isso ai",
        "valeu",
        "obrigado pode encerrar",
        "obg pode finalizar",
        "obrigado ja resolvi",
        "pode dar como encerrado",
        "dar por encerrado",
      ];
      if (array_finalizar.includes(userInput)) {
        intent = "finalizar";
        break;
      }
    }

    if (option === "opcao1") {
      const array_opcao1 = [
        "1",
        "opcao 1",
        "um",
        "opcao um",
        "primeira opcao",
        "escolho a primeira",
        "escolho a 1",
        "quero a 1",
        "quero a primeira",
        "vou de 1",
        "vou de um",
        "vou na primeira",
        "optei pela primeira",
        "optei por 1",
        "seleciono a 1",
        "seleciono a primeira",
      ];
      if (array_opcao1.includes(userInput)) {
        intent = "opcao1";
        break;
      }
    }

    if (option === "opcao2") {
      const array_opcao2 = [
        "2",
        "opcao 2",
        "dois",
        "opcao dois",
        "segunda opcao",
        "escolho a segunda",
        "escolho a 2",
        "quero a 2",
        "quero a segunda",
        "vou de 2",
        "vou de dois",
        "vou na segunda",
        "optei pela segunda",
        "optei por 2",
        "seleciono a 2",
        "seleciono a segunda",
      ];
      if (array_opcao2.includes(userInput)) {
        intent = "opcao2";
        break;
      }
    }

    if (option === "opcao3") {
      const array_opcao3 = [
        "3",
        "opcao 3",
        "tres",
        "opcao tres",
        "terceira opcao",
        "escolho a terceira",
        "escolho a 3",
        "quero a 3",
        "quero a terceira",
        "vou de 3",
        "vou de tres",
        "vou na terceira",
        "optei pela terceira",
        "optei por 3",
        "seleciono a 3",
        "seleciono a terceira",
      ];
      if (array_opcao3.includes(userInput)) {
        intent = "opcao3";
        break;
      }
    }

    if (option === "opcao4") {
      const array_opcao4 = [
        "opcao 4",
        "opcao quatro",
        "quatro",
        "4",
        "um quatro",
        "uma quatro",
        "numero quatro",
        "numero 4",
        "escolha 4",
        "escolha quatro",
        "quero a quatro",
        "quero a 4",
        "quero opcao 4",
        "quero opcao quatro",
        "quero numero quatro",
        "quero numero 4",
        "vou querer a quatro",
        "vou querer a 4",
        "vou de 4",
        "vou de quatro",
      ];

      if (array_opcao4.includes(userInput)) {
        intent = "opcao4";
        break;
      }
    }

    if (option === "opcao5") {
      const array_opcao5 = [
        "opcao 5",
        "opcao cinco",
        "cinco",
        "5",
        "um cinco",
        "uma cinco",
        "numero cinco",
        "numero 5",
        "escolha 5",
        "escolha cinco",
        "quero a cinco",
        "quero a 5",
        "quero opcao 5",
        "quero opcao cinco",
        "quero numero cinco",
        "quero numero 5",
        "vou querer a cinco",
        "vou querer a 5",
        "vou de 5",
        "vou de cinco",
      ];

      if (array_opcao5.includes(userInput)) {
        intent = "opcao5";
        break;
      }
    }
  }

  workflow.intent = intent;
  workflow.recognized = !!intent;

  console.log("Resultado final:", {
    recognized: workflow.recognized,
    intent: workflow.intent,
  });
} catch (error) {
  console.log(`Erro Valida NLU  HNSG- conversa`);
  throw new Error("Erro ao processar a intenção");
}
