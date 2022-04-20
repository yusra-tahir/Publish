const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const postsController = require("../controllers/posts");

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", bodyParser.json(), postsController.create);

module.exports = router;
