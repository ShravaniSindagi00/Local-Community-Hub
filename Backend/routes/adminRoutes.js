// backend/routes/adminRoutes.js
const adminRouter = express.Router();
const { loginAdmin, registerAdmin } = require("../controllers/adminController");

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;