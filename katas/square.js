/**************************************************************
    Intent:
    Drone should fly in a square pattern, initially
    going forward, then forming the square in a clockwise
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

var interval = 1250
var speed = .3;

client.takeoff();

client
    .after(interval, function(){

        this.front(speed)
    })
    .after(interval, function(){

        this.clockwise(speed);
    })
    .after(interval, function(){

        this.front(speed);
    })
    .after(interval, function(){

        this.clockwise(speed);
    })
    .after(interval, function(){

        this.front(speed);
    })
    .after(interval, function(){

        this.clockwise(speed);
    })
    .after(interval, function(){

        this.front(speed)
    })
    .after(interval, function(){

        this.stop();
    })
    after(interval, function(){

        this.animateLeds('leftMissle', 5, 1);
        this.animateLeds('rightMissle', 5, 1);
        this.animateLeds('blinkOrange', 5, 1);
        this.animate('flipBehind', 1000)
    })
    .after(6000, function(){

        this.stop();
        this.land();
    });