/**
 * Created by student on 16.03.16.
 */
var storageUsers = [];
module.exports = {
    getUsers: function(){
        if(storageUsers.length==0){
            return -1;
        }
        return storageUsers;
    },
    putUsers: function(users){
        if (storageUsers.length !== 0) {
            for (var i = 0; i < storageUsers.length; i++) {
                if (storageUsers[i].nick == users.nick) {
                    storageUsers[i] = users;
                } else {
                    storageUsers.push(users);
                }
            }
        }else{storageUsers.push(users);}
        //storageUsers.push(users);
    }
};
