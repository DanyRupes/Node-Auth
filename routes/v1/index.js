const path = require('path')
const express = require('express')
const blog = require('./blogs')
const {getDetails, getDetailsScope, } = require('./profile')

module.exports = app => {

    // blogs
    app.get('/listBlogs', blog.listBlogs)

    // profile
    app.get('/profile', getDetailsScope, getDetails)
}