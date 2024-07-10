"use strict";

const home= (req, res)=> {
    res.render("home/index");
};


const login= (req,res)=> {
    res.render("home/login");
};

module.exports= { //밖으로 꺼낼 때.
    home,
    login,

};
