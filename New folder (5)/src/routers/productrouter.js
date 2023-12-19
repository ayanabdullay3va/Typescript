const router = require("express").Router();
const useControllers = require("./../controller/useController");

router.post("/product", useControllers.postproduct);
router.get("/product", useControllers.getAllproduct);

module.exports = router;