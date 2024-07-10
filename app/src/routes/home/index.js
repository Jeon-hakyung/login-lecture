"use strict"; 

const express=require("express");
const router= express.Router();

const ctrl= require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login",ctrl.login);

module.exports=router; //라우터를 사용할 수 있도록 웹으로 내보내기 
