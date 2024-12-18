const express = require("express");
const {modificarHerramientaPorId,obtenerInventario, crearHerramienta, obtenerherramientaporid, eliminarHerramientaporid} = require("../controllers/inventario")
const router = express.Router();

router.get("/",obtenerInventario)
router.post("/", crearHerramienta)
router.get("/:id",obtenerherramientaporid)
router.put("/:id",modificarHerramientaPorId)
router.delete("/:id",eliminarHerramientaporid)

module.exports = router;