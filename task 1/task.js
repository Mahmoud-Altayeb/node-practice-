/*
    * task requirment :
    * create server on 300
    * handle tow routes
    * return greeting on rout /
    * return a list dummy users on /users
    * add form with user name input to / page and submit a post request to /create-user upon a button click
    * add the /create-user route and parse the incoming data and log it to the console 
*/

const http = require('http');
http.createServer(function (req, res){
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">send</button></form></body>'
        );
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<div>');
        res.write('<ul>');
        res.write('<li> user 1 </li>');
        res.write('<li> user 2 </li>');
        res.write('</ul>');
        res.write('</div>');
        return res.end();
    }
    // Send a HTML response with some "Page not found text
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}).listen(300);