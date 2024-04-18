const express = require("express")
const { getAllQuestions } = require("../controllers/question.controller")
const router = express.Router()

router.get("/", getAllQuestions)


module.exports = router;