var arDrone = require('ar-drone');
var log = require('./helpers/log');

var client = arDrone.createClient();


// Config - allow for useful event emitting
client.config('general:navdata_demo', 'FALSE');

// Altitude
// client.on('altitudeChange', function(altitude){

//     log.info(">> Altitude is " + altitude);
// });

// Warn user drone has a low battery
client.on('lowBattery', function(battery){

    log.warn("Battery is low " + battery);
});

client.on('batteryChange', function(battery){

    log.info("battery charge is now " + battery);
});


// Generic error catching
client.on("error", function(error){


    log.error(error);
});


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