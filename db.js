var mongoose = require('mongoose');
mongoose.connect('mongodb://nodejsuser:password1@ds111963.mlab.com:11963/nodejs', () => {
    console.log("mongodb connected successfully");
});