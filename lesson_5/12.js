"use strict";
var addresses = require('./addresses');
var result = [];
var reg =/(?: +)?(?:[а-я\-]+\.? ?)?((?:[0-9\-]+)?(?:[а-яА-Яё ])+?)(?:,?)(?: +)?(?:дом)?(?: +)?(\d+-?[а-яА-Яё]?)(?:[, ]+)?(?:кв\.|\/)?(?: +)?(\d+)?(?: +)?/g;//why g flag?!!
var el = [];
for (var i=0;i<addresses.length;i++){
    if(el= reg.exec(addresses[i])){
        result.push(    {street:el[1],
            house:(el[2] == undefined) ? "" : el[2],
            flat:(el[3] == undefined) ? "" : el[3]  });
        reg.exec();
    }else{result.push("error parser")}
    }
module.exports = result;








