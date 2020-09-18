const mongoose = require('mongoose');
const validator =require('validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type :String,
        unique:true,
        required : true,
        trime : true,
        lowercase :true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }

    },
    name:{ type:String ,uppercase:true, trim: true, required: true},
    address:{ type:String, default:"iamaddress" , uppercase:true},
    contact1:{ type:String, minlength:10, required: true},
    contact2:{ type:String, default:"0000000000"},
    password:{ type:String, minlength:6, maxlength:12},
    type:{type:Boolean}
});

const User = mongoose.model('user',userSchema);

module.exports = User;