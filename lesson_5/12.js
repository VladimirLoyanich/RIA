"use strict";
var addresses = require('./addresses');
var result = [];
var reg =/(?: +)?(?:[а-я\-]+\.? ?)?((?:[0-9\-]+)?(?:[а-яА-Яё ])+?)(?:,?)(?: +)?(?:дом)?(?: +)?(\d+-?[а-яА-Яё]?)(?:[, ]+)?(?:кв\.|\/)?(?: +)?(\d+)?(?: +)?/g;
debugger;
var el = [];
for (var i=0;i<addresses.length;i++){
    while (el = reg.exec(addresses[i])){
        result.push(new (function (){
            this["street"]=el[1];
            this["house"]=el[2];
            this["flat"]=(el[3]==undefined)?"":el[3];
            return this;
        })());
    }
};
console.log(result);
module.exports = result;








