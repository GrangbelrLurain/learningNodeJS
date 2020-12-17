const http = require('http');
const fs = require('fs');
const url = require('url');
 
const app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    
      if(pathname === '/'){
        if(queryData.id === undefined){
          
          var title = 'welcome';
          var discription = 'hello, node.js';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=1">HTML</a></li>
              <li><a href="/?id=2">CSS</a></li>
              <li><a href="/?id=3">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>
            ${discription}
            </p>
          </body>
          </html>
          `;

          response.writeHead(200);
          response.end(template);
       }else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
          const discription = data;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=1">HTML</a></li>
              <li><a href="/?id=2">CSS</a></li>
              <li><a href="/?id=3">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>
            ${discription}
            </p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }
    } else {
      response.writeHead(400);
      response.end('Not found');
    }
  });

app.listen(3000);