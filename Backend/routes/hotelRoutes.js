const hotelRouter = express.Router();
const { getHotels, getHotelById, createHotel, updateHotel, deleteHotel } = require("../controllers/hotelController");

hotelRouter.get("/", getHotels);
hotelRouter.get("/:id", getHotelById);
hotelRouter.post("/", createHotel);
hotelRouter.put("/:id", updateHotel);
hotelRouter.delete("/:id", deleteHotel);

module.exports = hotelRouter;