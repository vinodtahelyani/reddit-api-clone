var assert = require('assert');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds111638.mlab.com:11638/redit-api');


var {Person} = require('./Person');
var {Band} = require('./Band');


Band.findOne({}).populate({ path: 'members' }).then((doc) => {
  console.log(doc.members);
  console.log(doc);
}).catch((e)=>{
  console.log(e.message);
});