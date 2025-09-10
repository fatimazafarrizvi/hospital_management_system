const express = require('express')
const router = express.Router()
const admin = require("../APIs/adminsApi")

router.post("/admin_all", admin.adminfind) //login
router.post("/admin_insert", admin.insert_admin) //sign_up
router.put("/admin_put", admin.update_admin)
router.delete("/admin_delete", admin.delete_admin)

module.exports = router
