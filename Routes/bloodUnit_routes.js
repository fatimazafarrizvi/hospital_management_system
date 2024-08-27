const express = require('express')
const router = express.Router()
const bloodUnit = require("../APIs/bloodUnitApi")

router.get("/blood_all", bloodUnit.bloodUnit_all)
router.post("/blood_insert", bloodUnit.insert_bloodUnit)
router.put("/blood_put", bloodUnit.update_bloodUnit)
router.delete("/blood_delete", bloodUnit.delete_bloodUnit)

module.exports = router