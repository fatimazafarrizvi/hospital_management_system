const express = require('express')
const router = express.Router()
const hospitalapi = require("../APIs/hospitalApi")

router.get("/hp_all", hospitalapi.hospital_all)
router.post("/hp_insert", hospitalapi.insert_hp_data)
router.put("/hp_put", hospitalapi.update_hp_data)
router.delete("/hp_delete", hospitalapi.delete_hp_data)

module.exports = router