import express from "express";
import { getAllPlaces } from "../controllers/placesController.js";
const placesRouter = express.Router();

placesRouter.get("/", getAllPlaces);

export default placesRouter;
