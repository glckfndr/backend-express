import { places } from "../data/places.js";
export const getAllPlaces = (req, res, next) => {
  console.log("Get request in all places");
  res.json([...places]);
};

export const getPlaceById = (req, res, next) => {
  console.log("Get request for place with ID:", req.params.id);
  const placeId = req.params.id;
  const place = places.find((p) => p.id === placeId);
  if (!place) {
    const error = new Error("Could not find a place for the provided ID.");
    error.code = 404;
    throw error;
  }
  res.json(place);
};

export const getPlacesByCreatorId = (req, res, next) => {
  console.log("Get request for places by creator ID:", req.params.uid);
  const creatorId = req.params.uid;
  const userPlaces = places.filter((p) => p.creator === creatorId);
  if (userPlaces.length === 0) {
    const error = new Error(
      "Could not find places for the provided creator ID."
    );
    error.code = 404;
    return next(error);
  }
  res.json(userPlaces);
};
