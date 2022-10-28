const express = require("express")
const router = express.Router()
const authRoutes = require("../controller/auth.controller")

router.get("/login",  authRoutes.getLogin);

router.post("/login", authRoutes.login);

module.exports = router