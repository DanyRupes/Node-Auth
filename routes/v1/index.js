const path = require('path')
const express = require('express')
const blog = require('./blogs')
const passport = require('passport')
var util = require('util');

module.exports = app => {

    // company site
    app.use(express.static(path.join(__dirname + '/../../client/build')));
    app.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../../client/build/index.html')) });

 

    // blogs
    app.get('/listBlogs', blog.listBlogs)
}