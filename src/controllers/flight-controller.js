const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
    try {
        const response = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });

        SuccessResponse.message = "Flight created"
        SuccessResponse.data = response
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse) 
    }
}

async function getAllFights(req, res) {
    try {
        const flights = await FlightService.getAllFights(req.query);
        SuccessResponse.data = flights
        return res 
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res  
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createFlight,
    getAllFights
}