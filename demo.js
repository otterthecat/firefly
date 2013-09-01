var arDrone = require('ar-drone');
var clientEvents = require('./helpers/clientEvents');
var log = require('./helpers/log');

var client = arDrone.createClient();
// listen for variety of events
clientEvents.set(client);


// Let's get Flying!
client.takeoff();

client
    .after(3500, function(){

        this.up(.4)
    })
    .after(1500, function(){

        this.front(.6);
    })
    .after(1500, function(){

        this.clockwise(.6)
    })
    .after(1500, function(){

        this.front(.6);
    })
    .after(1500, function(){

        this.clockwise(.6);
    })
    .after(2500, function(){

        this.animateLeds('green', 2, 5);
    })
    .after(4000, function(){

        this.stop();
        this.land();
    });