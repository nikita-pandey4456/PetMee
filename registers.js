const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true
        //required: [true, 'please provide your email'],
        // unique: true,
        // lowercase: true,
        // validate: [validator.isEmail, 'please provide a valid email']
        


    },

    password: {
        type: String,
        required:true
        // required: [true, 'please provide a password'],
        //  minlength: 8
        
        
    }
});

userSchema.pre('save', async function(next) {

    if( this.isModified('password'))
  {
    console.log(`current password is ${this.password}`);

    this.password = await bcrypt.hash(this.password,12);
    console.log(`current password is ${this.password}`);
  
  }
  
    next();
  });


const UserRegister = new mongoose.model("UserRegister",userSchema);
module.exports = UserRegister;