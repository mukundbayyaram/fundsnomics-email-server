const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const config = require('../config/config.json');

mongoose.connect(
    config.database.db_url, { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
    console.log('Mongoose connected');

    // mongoose.connection.collections['profiles'].createIndex( { 'name': 1 }, { "background": false } )
    // .then(result => {
    //     console.log("Result: ", result);

    //     mongoose.connection.db.indexInformation('name', (res, err) => {
    //         console.log(res);
    //     });
    // })
    // .catch(error => {
    //     console.log("Error: ", error);
    // });
})
.on('error', () => {
    console.log("Mongoose error: ", error);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose connection terminated.');
        process.exit(0);
    });
});