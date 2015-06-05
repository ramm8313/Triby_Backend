var mongoose = require('mongoose');

mongoose.connect('mongodb://user:pwd@ds037990.mongolab.com:37990/wec1node');
//mongoose.connect('mongodb://localhost/wec1node');

module.exports.User = require('./user');
module.exports.Token = require('./token');
module.exports.SideChat = require('./sidechat');
module.exports.Tribe = require('./tribe');
module.exports.Event = require('./event');
module.exports.Biz = require('./biz');
module.exports.Ipeople = require('./ipeople');
module.exports.Post = require('./post');
module.exports.Picture = require('./picture');
module.exports.Feedback = require('./feedback');
module.exports.Device = require('./device');
