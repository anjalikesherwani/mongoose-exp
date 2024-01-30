const { default: mongoose } = require("mongoose");

monggose = require("mongoose");
express = require("express");

app = express();
port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
// Connect to MongoDB database using Mongoose.
mongoose.connect("mongodb://localhost:27017/alddb").then(()=>{
    // If connected successfully then print a success message
    console.log("Connected to Database!")
}).catch((error)=>{
    console.log(error)
}); 

