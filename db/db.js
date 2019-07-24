const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/photosharingsite2';

// just using it cause mongoose tolm me too....
mongoose.connect(connectionString, {
    useNewUrlParser: true
});



//gives us status updates for mongoose
mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${connectionString}`);
});
mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected to ${connectionString}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`mongoose error to ${connectionString}`);
});