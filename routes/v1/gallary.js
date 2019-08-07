const GallItem = require('../../data/models/GallItem')


const userGallary = async (req, res) => {
    let Gallary = await GallItem.find({gallId:req.user.sub})
    res.send({details:Gallary})
}




const addFile = async (req, res)=>{
    let { name, url} = req.body
    let user = req.user.sub
    let addFile = await new GallItem({name, url, gallId:user}).save()
    res.send({details:addFile})
}



module.exports = { userGallary, addFile }