import express from "express";

const PORT = 5000;
const app = express();

app.get("/api", (req, res) => res.json({ message: "hello" }));

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
