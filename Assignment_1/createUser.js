const create_user = (req,res)=> {
    const body = [];
    req.on('data',(chunk) =>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(message);
    })
}

module.exports = create_user;