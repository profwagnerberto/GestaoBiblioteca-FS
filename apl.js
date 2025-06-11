const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const rotasLivro = require("./routes/livroRoutes");
const rotasSobre = require("./routes/sobreRoutes");

const apl = express();
const PORTA = 3000;

// Configurar a pasta pública
apl.use(express.static('public'));

// Middleware
apl.use(bodyParser.json());
apl.use(bodyParser.urlencoded({ extended: true }));

apl.set("view engine", "ejs");
apl.use(expressLayouts);
apl.set("layout", "layout");

apl.get("/", (req, res) => {
  res.render("principal", { titulo: "Página principal" });
});

apl.use("/sobre", rotasSobre);
apl.use("/livro", rotasLivro);

// Start Server
apl.listen(PORTA, () => {
  console.log(`O aplicativo está executando na porta ${PORTA}`);
});
