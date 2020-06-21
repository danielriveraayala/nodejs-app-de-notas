const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAlumno } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/alumno", renderAlumno);

module.exports = router;
