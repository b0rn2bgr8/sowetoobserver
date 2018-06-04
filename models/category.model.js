const mongoose = require('mongoose');
const Schema = mongoose.Schema
//or
//import {Schema} from 'mongoose';
//const { Schema } = require('mongoose');

const schemaCategory = new Schema({
    name:{type:String},
    description:{type:String}
});

module.exports = mongoose.model('category', schemaCategory);