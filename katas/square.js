/**************************************************************
    Intent:
    Drone should fly in a square pattern, initially
    going forward, then forming the square in a left
    rotation.

    After completing the square, it should flash it's lights
    for a bit, do a backwards flip, then land.

    NOTE: Not yet tested with drone!!!!!!
**************************************************************/

// Imports
var arDrone = require('ar-drone');
var clientEvents = require('../helpers/clientEvents');

// Set Objects
var client = arDrone.createClient();
// listen for variety of events
clientEvents.set(client);

var interval = 1500
var speed = .5;

client.takeoff();

client
    .after(interval, function(){

        this.front(speed * 2)
    })
    .after(interval, function(){

        this.up(1);
    })
    .after(interval, function(){

        this.counterClockwise(.2)
    })
    .after(interval, function(){

        this.up(speed);
    })
    .after(interval, function(){

        this.front(speed);
    })
    .after(interval, function(){

        this.stop();
        this.land();
    });