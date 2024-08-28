const mongoose = require("mongoose");

const dbConnection = (dbUrl) => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
};

module.exports = dbConnection;
