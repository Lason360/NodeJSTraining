const userPageRender = (req,res)=> {
    res.write('<html><head>Main Page</head>');
    res.write('<body><ul><li>Lasana</li><li>Nadun</li><li>Shammika</li><li>Navoda</li><li>Tharinda</li></ul></body></html>');
    return res.end();
}

module.exports = userPageRender;