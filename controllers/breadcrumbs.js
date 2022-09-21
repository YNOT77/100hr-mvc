const Breadcrumbs = require('../models/Breadcrumbs')


module.exports = {

    // @desc    Create Breadcrumb
    // @route   POST /:id
    createBreadcrumb: async (req, res) => {
        try {
            req.body.user = req.user.id
            await Breadcrumbs.create(req.body)
            res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
            res.render('error/500')
        }
    },

    // @desc    Delete Breadcrumb
    // @route   DELETE /:id
    deleteBreadcrumb: async (req, res) => {
        try {
            await Breadcrumbs.remove({ _id: req.params.id })
            res.redirect('/dashboard')
        } catch (error) {
            console.error(error)
            return res.render('error/500')
        }
    },
    // @desc    Edit Breadcrumb
    // @route   PUT /edit/:id
    editBreadcrumb: async (req, res) =>{
        try {
            
        } catch (error) {
            console.error(error)
            res.redirect('error/500')
        }
    }
}