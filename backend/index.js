// import mongoose from "mongoose";

// const url = "mongodb+srv://twitter6498:090@cluster0.irrpvd6.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(url)
// .then(() => console.log("connected to db"))
// .catch(() => console.log("not connected"));



import http from "http";

const server = http.createServer((req, res) => {
    
    if (req.url === "/"){
        res.write("Loading Home page...");
        res.end();
    }

    if (req.url === "/products"){
        res.write("Loading products page...");
        res.end();
    }

    if (req.url === "/services"){
        res.write("Loading services page...");
        res.end();
    }
    
});

server.listen(5000);