var user = require("../lib/users");
var url = require("url");
var qs = require('querystring');

module.exports = {
   get: function(request, response){

        if (user.getUsers()){
           response.statusCode = 200;
           response.write(JSON.stringify(user.getUsers()));
           response.end();
       }else{

           response.statusCode = 204;
           response.end();
       }
   },

    post: function(request, response){
        var check;
        if(request.method=='POST') {
            var body='';
            request.on('data', function (data) {
                body +=data;
            });
            request.on('end',function(){
                POST =  qs.parse(body);
                var okObject={};
                check = true;
                if(!("nick" in POST)){
                    check = false;
                    response.statusCode = 400;
                    response.end("Bad request - nick");
                }else{okObject.nick=POST.nick}

                if(!("name" in POST)){
                    check = false;
                    response.statusCode = 400;
                    response.end("Bad request - name");
                }else{okObject.name=POST.name}

                if(!("e-mail" in POST)){
                    okObject["e-mail"] = undefined;
                    response.end("Bad request - name");
                }else {okObject["e-mail"]=POST["e-mail"]}

                if(!("description" in POST)){
                    okObject.description = undefined;
                    response.end("Bad request - name");
                }else {okObject.description=POST.description}

                if(!("age" in POST)){
                    okObject.age = undefined;
                    response.end("Bad request - name");
                }else {okObject.age =POST.age}

                        if (check){

                            user.putUsers(okObject);
                            response.end();
                        }

            });
        }

    }
};