const mongoose = require('mongoose')

const BreadcrumbsSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    body2: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Breadcrumbs', BreadcrumbsSchema)