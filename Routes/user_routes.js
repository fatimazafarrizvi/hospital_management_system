const express = require('express')
const router = express.Router()
const user = require("../APIs/userApi")

router.get("/user_all", user.userfind)
router.post("/user_insert", user.insert_user)
router.put("/user_put", user.update_user)
router.delete("/user_delete", user.delete_user)

module.exports = router