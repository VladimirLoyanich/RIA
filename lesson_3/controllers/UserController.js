var user = require("../lib/users");
var url = require("url");

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
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        var check;
        if(request.method=='POST') {
            var body='';
            request.on('data', function (data) {
                body += data;
            });
            request.on('end',function(){

                try {
                    var postUser =  JSON.parse(body);
                } catch  (e){
                    response.statusCode = 400;
                    response.end("Bad request - JSON error="+e);
                }


                var okObject={};


                check = true;
                if("nick" in postUser){
                    okObject.nick=postUser.nick;
                }else{check = false;
                    response.statusCode = 400;
                    response.end("Bad request - nick ");}

                if("name" in postUser){
                    okObject.name=postUser.name
                }else{check = false;
                    response.statusCode = 400;
                    response.end("Bad request - name");}

                if("e-mail" in postUser){
                    okObject["e-mail"]=postUser["e-mail"]
                }else {okObject["e-mail"] = undefined;
                    response.end("Bad request - name");}

                if("description" in postUser){
                    okObject.description=postUser.description
                }else {okObject.description = undefined;
                    response.end("Bad request - name");}

                if("age" in postUser){
                    if (postUser.age>120){okObject.age =120}
                    if (postUser.age<0){okObject.age =0}
                    if (postUser.age>0 && postUser.age<120){okObject.age = postUser.age}

                }else {okObject.age = undefined;
                    response.end("Bad request - name");}

                        if (check){
                            user.putUsers(okObject);
                            response.end();
                        }

            });
        }

    }
};