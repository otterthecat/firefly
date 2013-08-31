var arDrone = require('ar-drone');
var client = arDrone.createClient();

var colors = require('colors');

// Config - allow for useful event emitting
client.config('general:navdata_demo', 'FALSE');

// Altitude
client.on('altitudeChange', function(altitude){

    console.log("^ Altitude has changed (" + altitude + ") ^");
});

// Warn user drone has a low battery
client.on('lowBattery', function(battery){

    var label = "BATTERY IS LOW: ".yellow;
    console.log("==========================".yellow);
    console.log(label + battery);
    console.log("==========================".yellow);
});

client.on('batteryChange', function(battery){

    var label = "Battery Change: ".blue;
    console.log("--------------------------".blue);
    console.log(label + battery);
    console.log("--------------------------".blue);
});


// Generic error catching
client.on("error", function(error){

    var label = "ERROR: ".red;
    console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=".red);
    console.log(label + error);
    console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=".red);
});


// Let's get Flying!
client.takeoff();

client
    .after(2000, function(){

        this.clockwise(1);
    })
    .after(5000, function(){

        this.counterClockwise(1);
    })
    .after(5000, function(){

        this.animateLeds('snakeGreenRed', 2, 5);
    })
    .after(3000, function(){

        this.stop();
        this.land();
    });