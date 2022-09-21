const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')
const breadcrumbsController = require('../controllers/breadcrumbs')
const Breadcrumbs = require('../models/Breadcrumbs')


router.post('/', ensureAuth, breadcrumbsController.createBreadcrumb);
router.delete('/:id', ensureAuth, breadcrumbsController.deleteBreadcrumb);
router.put('/edit/:id', ensureAuth, breadcrumbsController.editBreadcrumb)
module.exports = router