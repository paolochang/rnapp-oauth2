import express from "express";
import { initializePassport } from "./middleware/passport";
import authRouter from "./routers/auth.js";

const PORT = 5000;
const app = express();

initializePassport(app);

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
