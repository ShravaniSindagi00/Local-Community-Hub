const express = require('express')
const eventRouter = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require("../controller/eventController");

eventRouter.get("/", getEvents);
eventRouter.get("/:id", getEventById);
eventRouter.post("/", createEvent);
eventRouter.put("/:id", updateEvent);
eventRouter.delete("/:id", deleteEvent);

module.exports = eventRouter;