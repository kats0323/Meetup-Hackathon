const index = (req, res) => {
    res.render("index/welcome");
}

const about = (req, res) => {
    res.render("index/about");
}



module.exports = {
    index,
    about
}