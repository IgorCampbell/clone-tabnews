function status(request, response) {
  response
    .status(200)
    // .send("Os alunos do curso.dev são acima da média");
    .json({ chave: "Os alunos do curso.dev são acima da média" });
}

export default status;
