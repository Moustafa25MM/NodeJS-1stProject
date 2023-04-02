const fs = require('fs');

const routes = (req,res) => {
    const url = req.url;
        if(url === '/'){
            res.write(`
            <html>
            <head>
            </head>
            <body>
            <form action="/user" method="POST">
                <input type="text" name="message" >
                <button type="submit">
                </button>
            </form>
            </body>
            </html>
            `);
            return res.end();
        }
        if(url==='/user' && req.method==='POST'){
            const body = [];
            req.on('data',(chunk)=>{
                console.log(chunk);
                body.push(chunk);
            });
            req.on('end',()=>{
                const parseBody = Buffer.concat(body).toString();
                const message = parseBody.split('=')[1];
                fs.writeFileSync('user.txt',message);
            });
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        }

        res.setHeader('Content-Type','text/html');
        res.write(`
        <html>
        <head>
        <title>
        Hello from Node.js
        </title>
        <pre>
        <h1>    Hello from Node.js
        </h1>
        </head>
        </html>
        `);
        res.end();
}

module.exports =  { 
    routes
}