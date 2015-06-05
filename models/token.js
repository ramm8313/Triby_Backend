var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var TokenSchema = new Schema({
  token: { type: String, unique: true, required: true },
  username: String
});

TokenSchema.statics.getUsername = function (ptoken, cb) {
    
   this.findOne({ token: ptoken }, function(err, gtoken) {
    
    if (err || !gtoken) return cb(err);   
	
	tkn = gtoken.toObject();
	delete tkn.__v;
	cb(null, tkn);
   }); 
 }

 var TokenModel = mongoose.model('Token', TokenSchema);
 module.exports = TokenModel;
