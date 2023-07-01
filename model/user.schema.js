import mongoose from "mongoose";
// import isEmail from 'validator/lib/isEmail.js';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique : true,
    },
    email: {
        type: String,
        unique: true,
        // validate: [isEmail, 'invalid email']
    },
    password : {
        type:String
        //we can also use hooks to encrypt the password
    },
})

export default mongoose.model('User', userSchema);