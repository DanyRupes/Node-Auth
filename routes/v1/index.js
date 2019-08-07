const path = require('path')
const express = require('express')
const Gallary = require('./gallary')
const {getDetails, getDetailsScope, } = require('./user')

module.exports = app => {

    app.get ('/auth', (req, res)=>res.send('fine'))

    // Gallary
    app.get('/user/gallary', Gallary.userGallary)
    app.get('/addfile', Gallary.addFile)

    // profile
    app.get('/profile', getDetails)
}