const express =  require('express');
const bcrypt =  require('bcrypt-nodejs');
const cors =  require('cors');
const knex = require('knex');

const register = require('./Controllers/register');
const signin = require('./Controllers/signin');
const profile = require('./Controllers/profile');
const image = require('./Controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Zaza@4321',
    database : 'smartbrain'
  }
});


const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
res.send(database.users);
})

app.post('/signin',(req,res)=>{signin.handleSignIn(req,res,db,bcrypt)})
app.post("/register",(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db)})
app.put('/image',(req,res) => {image.handleImage(req,res,db)})
app.post('/imageurl',(req,res) => {image.handleApiCall(req,res)})

app.listen(8080,function(){

  console.log('app is running on port 8080');

});

// / -response = this is working
// /siginin --> Post = success/fail
// /register --> Post = user
// /profile/userid --> Get = user
// /image --> put -- user


// bcrypt.hash(password,null,null,function(err, hash) {
//   // Store hash in your password DB.
//   console.log(hash);
// });

// // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//   // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//   // result == false
// });