const express=require("express");
const {bookIssue}=require("../controllers/bookIssueController");
const bookIssueRouter=express.Router();

bookIssueRouter.post("/bookIssue",bookIssue);


module.exports=bookIssueRouter;