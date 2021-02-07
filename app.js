const { response } = require("express");
const express = require("express");
const port = 3000;
const path = require('path');
const functions = require("./functions")

const app = express();
app.set("view engine", "hbs");
app.use('/assets',express.static(path.join(__dirname, "./assets")));
app.use('/js',express.static(path.join(__dirname, "./js")));
app.get("/", function (req,res){
    res.render("index", {
        title: 'zajecia 0123',
        subTitle: functions.subTitle
            
        
    });
    
})
app.get("/about", function (req,res){
    res.send("Strona o nas");
})

app.listen(port,()=>{
    console.log(`Apka działa na porcie ${port}`)
})










// const http = require("http");


// const handler = (request, response) => {
//     response.end("Hello world!");
//     console.log("ktos jest na stronie");
// }

// const server = http.createServer(handler);
// const port = 3000;
// server.listen(port, (err) => {
//     if (err) { return console.log(err)}
//     console.log(`serwer dziala na porcie: ${port}`);
// })

// // const functions = require("./functions");

// // functions.helloWorld();
// // functions.add(1,2);