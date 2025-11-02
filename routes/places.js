import express from "express";
import { getAllPlaces, getPlaceById } from "../controllers/placesController.js";
const placesRouter = express.Router();

placesRouter.get("/api/places", getAllPlaces);
placesRouter.get("/api/places/:id", getPlaceById);

export default placesRouter;
