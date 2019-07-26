const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const middleWare =async (req, res, next)=>{
        req.user = "verified User"
        next()
}


app.use(middleWare)

require('./routes/v1')(app)





app.listen(8080, console.log("http://localhost:8080"))