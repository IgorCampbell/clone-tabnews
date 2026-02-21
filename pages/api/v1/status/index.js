import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows);
  response
    .status(200)
    // .send("Os alunos do curso.dev são acima da média");
    .json({ chave: "Os alunos do curso.dev são acima da média" });
}

export default status;
