const express = require('express')
const router = express.Router()
const featuresController = require("../controllers/features")
const {ensureAuth, ensureGuest} = require('../middleware/auth')



router.get('/', ensureAuth, featuresController.getFeatures);
module.exports = router