import express from "express";
import {
  getAllPlaces,
  getPlaceById,
  getPlacesByCreatorId,
} from "../controllers/placesController.js";
const placesRouter = express.Router();

placesRouter.get("/", getAllPlaces);
placesRouter.get("/creator/:uid", getPlacesByCreatorId);
placesRouter.get("/:id", getPlaceById);

export default placesRouter;
