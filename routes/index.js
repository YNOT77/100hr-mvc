const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Breadcrumbs = require('../models/Breadcrumbs')


// @desc    Landing page
// @route   GET /

router.get('/', ensureGuest, (req, res) => {
    res.render('landingPage',{
        layout:'landingPage',
        
    })
})
// @desc    Login page
// @route   GET /login

router.get('/login', ensureGuest, (req, res) => {
    res.render('login',{
        layout:'login',
        
    })
})

// @desc    Dashboard
// @route   GET /dashboard

router.get('/dashboard', ensureAuth, async (req, res) => { 
    try {
        const breadcrumbs = await Breadcrumbs.find({ user: req.user.id })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()
        res.render('dashboard',{
            name: req.user.firstName, 
            breadcrumbs,
        })
    } catch (error) {
        console.error(err)
        res.render('error/500')
    }
})

// @desc    Delete Breadcrumb
// @route   DELETE /breadcrumb/:id

router.delete('/breadcrumb/:id', ensureAuth, async (req, res) => {
    try {
        await Breadcrumbs.remove({ _id: req.params.id })
        res.redirect('/dashboard')
    } catch (error) {
        console.error(error)
        return res.render('error/500')
    }
})

module.exports = router