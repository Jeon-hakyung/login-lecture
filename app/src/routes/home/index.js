"use strict"; 

const express=require("express");
const router= express.Router();

const ctrl= require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login",ctrl.process.login);


module.exports=router; //라우터를 사용할 수 있도록 웹으로 내보내기 
