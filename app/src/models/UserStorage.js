"use strict";


class UserStorage {
    static #users= {
        id: ["wjsgkrud", "전하경"],
        psword: ["1234", "5678"],
        name:["전하경","전하경"],
    }; 

    static getUsers(...fields) {
        const users=this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field]= users[field];

            }
            return newUsers; 
            
        },{});
        console.log(newUsers);
        return newUsers;
    }

    static getUsersInfo(id) {
        const users=this.#users;
        const idx= users.id.indexOf(id);
        const usersKeys= Object.keys(users);
        const userInfo= usersKeys.reduce((newUser,info) => {
            newUser[info]= users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}


module.exports= UserStorage;