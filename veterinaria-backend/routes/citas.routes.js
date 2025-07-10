const express = require("express");
const router = express.Router();
const citasCtrl = require("../controllers/citas.controller");

router.get("/", citasCtrl.obtenerCitas);
router.post("/", citasCtrl.crearCita);
router.delete("/:id", citasCtrl.eliminarCita);
router.put("/:id", citasCtrl.actualizarCita);

module.exports = router;
