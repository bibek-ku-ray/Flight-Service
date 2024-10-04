const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/airport POST
router.post(
    "/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport
);

// /api/v1/airport GET
router.get("/", AirportController.getAllAirports);

// /api/v1/airport/:id GET
router.get("/:id", AirportController.getAirportById);

// /api/v1/airport/:id DELETE
router.delete("/:id", AirportController.destroyAirport);

// /api/v1/airport/:id PATCH
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
