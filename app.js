import express from "express";
import placesRouter from "./routes/places.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(placesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
