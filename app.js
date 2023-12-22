const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcryptjs');
const hbs = require("hbs");

// 
//const server = require("./server");
//const dotenv = require("dotenv");

//
//dotenv.config({path:"./config/config.env"});

require('./db/conn');

const Register = require("./models/registers");
const UserRegister = require('./models/registers');





const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "./public");

const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//console.log(path.join(__dirname, "./public"));

app.use(express.static(static_path));

app.set("view engine", "hbs");

app.set("views",template_path);

hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
  res.render("index")
});



app.get("/register", (req,res) => {
  res.render("register");
})

// create data in database
app.post("/register", async(req,res) => {

  try{

    const userRegister = new Register({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

  
    const registered = await userRegister.save();

    //this.password = await bcrypt.hash(this.password,12);
    res.status(201).render("index");


    

  }  catch(error){
    res.status(400).send(error);
  }

  
})

app.post("/register", (req,res) => {
  res.status(201).render("index");
})


app.get("/login", (req,res) => {
  res.render("login");
})

// for successful login 
app.post("/login", async(req,res) => {
  try{
       const email = req.body.email;
       const password = req.body.password;

       const useremail = await UserRegister.findOne({email:email});

       const isMatch = await bcrypt.compare(password,useremail.password);

       if(isMatch) {
        res.status(201).render("index");
       }

       else{
        res.send("password not matching");
       }

  }catch (error){
    res.status(400).send("Invalid email")
  }
})

app.get("/pet_owners", (req,res) => {
  res.render("pet_owners")
});

app.get("/pet_lovers", (req,res) => {
  res.render("pet_lovers")
});



app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
})


/*
app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`)
})

*/
