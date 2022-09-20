const express = require('express')
const router = express.Router()
const indexController = require("../controllers/index")
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Breadcrumbs = require('../models/Breadcrumbs')


router.get('/', ensureGuest, indexController.getLandingPage);
router.get('/login', ensureGuest, indexController.getLoginPage);
router.get('/dashboard', ensureAuth, indexController.getDashboard);

module.exports = router