const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({
    title: {tpye: String},
    article: {type: String},
    status: {type: String, enum:["draft", "published"]},
    author: {type: String}//Schema.Types.ObjectId, ref:'user'} //help
},{timestamps: {createdAt: "date_published", updatedAt: "date_updated"}}); //help

module.exports = mongoose.model('article', articleSchema);
