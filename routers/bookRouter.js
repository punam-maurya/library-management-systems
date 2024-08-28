const express=require("express");
const {addBook, getBooks, getBook, updateBook, deleteBook, getBookById}=require("../controllers/bookController");
const bookRouter=express.Router();

bookRouter.post("/addBook",addBook);

bookRouter.get("/getBooks",getBooks);

bookRouter.get("/getBook/:book",getBook)

bookRouter.get("/getBookById/:id",getBookById)

bookRouter.put("/updateBook",updateBook)

bookRouter.delete("/deleteBook/:id",deleteBook)

module.exports=bookRouter;