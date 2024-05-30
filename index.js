import express from "express";
import bodyParser from "body-parser";

const app =  express();
const port = 3000;
var heading = "";
var Content = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// middleware to add blog
function addBlog(req, res, next){
    heading = req.body["title"];
    Content = req.body["content"];
    next();
}

app.use(addBlog);

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/add", (req, res)=>{
    res.render("index.ejs", {
        head: heading,
        text: Content,
    });
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}.`);
});