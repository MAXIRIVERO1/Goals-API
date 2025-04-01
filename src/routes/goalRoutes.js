const { goalPostController, goalGetAllController, goalGetByIdController, goalPutController, goalDeleteController } = require("../controllers/goalController.js");

const goalRouter = require("express").Router();

goalRouter.post("/create", goalPostController);
goalRouter.get("/get", goalGetAllController);
goalRouter.get("/get/:id", goalGetByIdController);
goalRouter.put("/update/:id", goalPutController);
goalRouter.delete("/delete/:id", goalDeleteController);






module.exports = {
    goalRouter
}