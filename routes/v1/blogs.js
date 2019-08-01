



const listBlogs = async (req, res) => {
    res.send({ details: { blogs: ["One", "Two", "Three"] } })
}


module.exports = { listBlogs }