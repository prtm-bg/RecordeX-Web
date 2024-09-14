const express= require("express");
const app= express();
const path= require("path");
const mongoose= require('mongoose');
const dbUrl= 'mongodb://localhost:27017/recordex';
mongoose.connect(dbUrl);

const db= mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("Database Connected");
});

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('main.ejs');
})

app.get('*', (req, res)=>{
    res.render('error.ejs');
})

app.listen('8080', (req, res)=>{
    console.log("Server started successfully on port 8080");
})