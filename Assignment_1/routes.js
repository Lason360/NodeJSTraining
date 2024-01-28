const mainUser = require('./mainPage.js');
const users = require('./users.js');
const create_users = require('./createUser.js');
console.log('came to routes.js');
const routeHandler = (req,res)=>{
    console.log(req.url);

    const url = req.url;
    const method = req.method;
    if (url==='/'){
        mainUser(req,res);
    }
    else if (url==='/users'){
        users(req,res);
    }
    else if (url=='/createUser'){
        create_users(req,res);
    }
}


module.exports = routeHandler;