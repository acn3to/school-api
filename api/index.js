import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/", (_req, res) => {
  res.status(200).send({ messsage: "Welcome!" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
