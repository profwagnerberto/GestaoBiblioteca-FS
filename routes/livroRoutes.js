const express = require("express");

const router = express.Router();

// Exemplo de dados de Livros
let livros = require("../databases/base");

// Rota para mostrar livros
router.get("/", (req, res) => {
  res.render("livroCRUD", {
    titulo: "Página principal",
    dados: livros
  });
});

// Rota para adicionar livros
router.post("/", (req, res) => {
  const novoLivro = {
    nome: req.body.nome,
    autor: req.body.autor,
    paginas: req.body.paginas,
    preco: req.body.preco,
    estado: "Disponível",
  };
  livros.push(novoLivro);
  res.render("livroCRUD", {
    titulo: "Página principal",
    dados: livros,
  });
});

// Rota de empréstimo de livro
router.post("/emprestar", (req, res) => {
  const requestedNome = req.body.nome;
  livros.forEach((livro) => {
    if (livro.nome === requestedNome) {
      livro.estado = "Emprestado";
    }
  });
  res.redirect("/livro/emprestimo");
});

// Rota de devolução de livro
router.post("/devolver", (req, res) => {
  const requestedNome = req.body.nome;
  livros.forEach((livro) => {
    if (livro.nome === requestedNome) {
      livro.estado = "Disponível";
    }
  });
  res.redirect("/livro/devolucao");
});

// Rota de remoção de livro
router.post("/remover", (req, res) => {
  const requestedNome = req.body.nome;
  livros = livros.filter((livro) => livro.nome !== requestedNome);
  res.render("livroCRUD", {
    titulo: "Página principal",
    dados: livros,
  });
});

// Rota para mostrar livros disponíveis
router.get("/emprestimo", (req, res) => {
  livrosDisponiveis = livros.filter((livro) => livro.estado === 'Disponível');
  res.render("emprestimo", {
    titulo: "Empréstimo de Livros",
    dados: livrosDisponiveis,
  });
});

// Rota para mostrar livros emprestados
router.get("/devolucao", (req, res) => {
  livrosEmprestados = livros.filter((livro) => livro.estado === "Emprestado");
  res.render("devolucao", {
    titulo: "Devolução de Livros",
    dados: livrosEmprestados,
  });
});

module.exports = router;
