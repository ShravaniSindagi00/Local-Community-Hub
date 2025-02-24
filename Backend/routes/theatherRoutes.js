const theaterRouter = express.Router();
const { getTheaters, getTheaterById, createTheater, updateTheater, deleteTheater } = require("../controllers/theaterController");

theaterRouter.get("/", getTheaters);
theaterRouter.get("/:id", getTheaterById);
theaterRouter.post("/", createTheater);
theaterRouter.put("/:id", updateTheater);
theaterRouter.delete("/:id", deleteTheater);

module.exports = theaterRouter;