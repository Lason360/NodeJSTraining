const fs = require('fs');
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url==='/'){
        res.write('<html><head>This is the main page</head><body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body></html>')
        return res.end();
    }
    if(url=== '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
            
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head>not the main page</head></html>');
    res.end();
};

module.exports = {
    handler: requestHandler,
    someText: "Some text"
};