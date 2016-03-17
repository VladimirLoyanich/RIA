/**
 * Created by student on 16.03.16.
 */
var storageUsers = [];

var User = function (){};

User.prototype.getUsers = function(){
    if(storageUsers.length==0){
        return -1;
    }
    return storageUsers;
};

User.prototype.putUsers = function(users){
    if (storageUsers.length !== 0) {
        var dublicate = false;
        for (var i = 0; i < storageUsers.length; i++) {
            if (i===3){debugger;}
            if (storageUsers[i].nick === users.nick) {
                dublicate = true;
                storageUsers[i].name = users.name;
                storageUsers[i]["e-mail"] = users["e-mail"];
                storageUsers[i].description = users.description;
                storageUsers[i].age = users.age;
                break;
            }
        }
        if (!dublicate){storageUsers.push(users); }
    }else{storageUsers.push(users);}
};

    module.exports = new User();







