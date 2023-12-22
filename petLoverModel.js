const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const validator = require('validator');

// name, email, photo, password, passwordConfirm

const petloverSchema= new mongoose.Schema({

 name: {
  type: String,
  required: [true, 'please tell us your name']
  },

 email:{
   type: String,
   required: [true, 'please provide your email'],
   unique: true,
   lowercase: true,
   validate: [validator.isEmail, 'please provide a valid email']
  },

  description: {
    type: String,
    required: [true, 'please give is your description']
    },
  
  
  rating: {
    type: Number,
    default: 0
  },

  category: {
    type: String,
    required: [true, 'Please enter the category of pets you can offer caregiving']
  },

  // image

  createdAt: {
    type: Date, 
    default:Date.now
  }

});

// userSchema.pre('save', async function(next) {
//   if( !this.isModified('password')) return next();

//   this.password = await bcrypt.hash(this.password,12);

//   next();
// });

// const User = mongoose.model('User',userSchema);
// module.exports = User;

module.exports = mongoose.model("PetLover",petloverSchema);


