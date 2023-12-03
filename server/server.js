import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I am inside");
});

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
