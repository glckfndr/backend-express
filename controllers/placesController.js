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
    return res.status(404).json({ message: "Place not found" });
  }
  res.json(place);
};
