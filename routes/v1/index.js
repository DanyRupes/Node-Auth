const path = require('path')
const express = require('express')
const blog = require('./blogs')
const profile = require('./profile')
const passport = require('passport')
var util = require('util');

module.exports = app => {

    // blogs
    app.get('/listBlogs', blog.listBlogs)

    // profile
    app.get('/profile', profile.getDetails)
}