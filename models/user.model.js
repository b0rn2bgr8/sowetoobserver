const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname:{type: String},
    lastname:{type: String},
    password: {type: String},
    title:{type:String, enum:["Mr", "Mrs", "Ms", "Dr"]},
    contact_no:{type: String},
    email: {type: String},
    
    isAdmin:{type: Schema.Types.Boolean},
    isAuthor:{type: Schema.Types.Boolean}
}, {timepstamps: {createdAt: 'createdAt'}});

module.exports = mongoose.model('User', userSchema);