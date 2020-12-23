//pulling in the mongoose package
const mongoose = require('mongoose');

mongoose.set('useFinadAndModify', false);

//exporting the connection as a function to use in other files
const dbConnect = mongoose.connect('mongodb://localhost:27017/todo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    //message to say connect to mongoDB
    console.log('Connected to MongoDB');

module.exports = dbConnect;