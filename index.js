const express = require("express");
const dotenv = require("dotenv");
const cors=require("cors");
const dbConnection = require("./utility/db");
const userAuthRouter = require("./routers/userAuthRoutes");
const adminAuthRouter=require("./routers/adminAuthRoutes");
const bookIssueRouter=require("./routers/bookIssueRouter");
const bookRouter=require("./routers/bookRouter");

const app = express();

// Load environment variables from .env file
dotenv.config();

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user authentication routes
app.use("/api/user", userAuthRouter);
app.use("/api/admin",adminAuthRouter);
app.use("/api/book/issue",bookIssueRouter);
app.use("/api/book",bookRouter);

// Set the port from environment variable or default to 3000
let PORT = process.env.PORT || 3000;

// Establish database connection
dbConnection(process.env.dbUrl);

// Define a simple route for the homepage
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Start the server
app.listen(PORT, () => {
    console.log(`The server is running at ${PORT}`);
});
