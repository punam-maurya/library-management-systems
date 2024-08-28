const express=require("express");
const {register,login,updateProfile,getUsers, getUser,deleteUser}=require("../controllers/userAuthController");
const userAuthRouter=express.Router();

userAuthRouter.post("/register",register);

userAuthRouter.post("/login",login);

userAuthRouter.put("/update",updateProfile);

userAuthRouter.get("/users",getUsers)

userAuthRouter.get("/user-info/:email",getUser)

userAuthRouter.delete("/delete-user/:email",deleteUser)

module.exports=userAuthRouter;