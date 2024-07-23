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
        const usersKeys= Object.keys(users); // => [id,psword,name]
        const userInfo= usersKeys.reduce((newUser,info) => {
            newUser[info]= users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users=this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success:true};
    }
}


module.exports= UserStorage;