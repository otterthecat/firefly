var arDrone = require('ar-drone');
var client = arDrone.createClient();


// Altitude
client.on('altitudeChange', function(altitude){

    console.log("^ Altitude has changed (" + altitude + ") ^");
});

// Warn user drone has a low battery
client.on('lowBattery', function(battery){

    console.log("==========================");
    console.log("BATTERY IS LOW: " + battery);
    console.log("==========================");
});

client.on('batteryChange', function(battery){

    console.log('--------------------------');
    console.log('Battery Change: ' + battery);
    console.log('--------------------------');
});


// Generic error catching
client.on("error", function(error){

    console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=");
    console.log("Error: " + error);
    console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=");
});


// Let's get Flying!
client.takeoff();

client
    .after(2000, function(){

        this.clockwise(.5);
    })
    .after(2000, function(){

        this.clockwise(5);
    });
    .after(1000, function(){

        this.animateLEDs('snakeGreenRed', 2, 5);
    })
    .after(1000, function(){

        this.stop();
        this.land();
    });