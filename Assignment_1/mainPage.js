const mainPageRender = (req,res)=> {
    res.write('<html><head>Main Page</head><body>Hellooo!!! This is the body of the main page<form action="/createUser" method="POST"><input type="text" name="user_name"></input><button type="submit">Send</button></form></body></html>');
    console.log(req.url);
    return res.end();
    
}

module.exports = mainPageRender;