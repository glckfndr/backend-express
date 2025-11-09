import { places } from "../data/places.js";
import HttpError from "../models/httpError.js";

export const getAllPlaces = (req, res, next) => {
  console.log("Get request in all places");
  res.json([...places]);
};

export const getPlaceById = (req, res, next) => {
  console.log("Get request for place with ID:", req.params.id);
  const placeId = req.params.id;
  const place = places.find((p) => p.id === placeId);
  if (!place) {
    throw new HttpError("Could not find a place for the provided ID.", 404);
  }
  res.json(place);
};

export const getPlacesByCreatorId = (req, res, next) => {
  console.log("Get request for places by creator ID:", req.params.uid);
  const creatorId = req.params.uid;
  const userPlaces = places.filter((p) => p.creator === creatorId);
  if (userPlaces.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user ID.", 404)
    );
  }
  res.json(userPlaces);
};
