const express = require('express')
const router = express.Router()
const registerOpd = require("../APIs/registerForOpdApi")

router.get("/opd_all", registerOpd.registerOpd_all)
router.post("/opd_insert", registerOpd.insert_registerOpd)
router.put("/opd_put", registerOpd.update_registerOpd)
router.delete("/opd_delete", registerOpd.delete_registerOpd)

module.exports = router