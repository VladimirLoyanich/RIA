/**
 * Created by student on 15.03.16.
 */
"use strict";

const http = require("http"),
    url = require("url");

let handler =  (function (){
    let count = 0;

    return function (req, res, next){
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        let urlParsed = url.parse(req.url, true);

        if(urlParsed.pathname == "/index.html"){++count;res.end("привет мир!")}
        else if (urlParsed.pathname  == "/count.html"){res.end("количество запросов = " + count)}
        else {
            res.statusCode = 404;
            res.end("Page not found!");
        };

    }
})();

let server = http.createServer(handler);
server.listen(3000);