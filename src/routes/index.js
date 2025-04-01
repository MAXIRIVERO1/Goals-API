const { goalRouter } = require("./goalRoutes.js");
const router = require("express").Router();


router.use("/goal", goalRouter);



module.exports = {
    router
}

