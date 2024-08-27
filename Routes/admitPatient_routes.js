const express = require('express')
const router = express.Router()
const admitPatient = require("../APIs/admitPatientApi")

router.get("/admitP_all", admitPatient.admitPatient_all)
router.post("/admitP_insert", admitPatient.insert_admitPatient)
router.put("/admitP_put", admitPatient.update_admitPatient)
router.delete("/admitP_delete", admitPatient.delete_admitPatient)

module.exports = router