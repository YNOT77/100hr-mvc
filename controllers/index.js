const Breadcrumbs = require('../models/Breadcrumbs')


module.exports = {
    // @desc    Landing page
    // @route   GET /
    getLandingPage: async (req, res) =>{
        res.render('landingPage',{
            layout:'landingPage',
                    
            })
    },

    // @desc    Login page
    // @route   GET /login
    getLoginPage: async (req, res) =>{
        res.render('login',{
            layout:'login',
                    
            })
    },
    // @desc    Dashboard
    // @route   GET /dashboard
    getDashboard: async (req, res) =>{
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
    },

}