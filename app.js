import express from "express";
import placesRouter from "./routes/places.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/places", placesRouter);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
