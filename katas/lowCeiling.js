/**************************************************************
    Intent:
    Drone should take off and slowly increase altitude every
    second. when altitude reaches or exceeds specified hieght,
    drown will go down again, for specified number of times.
    Once number of attempts is reached, the drone will stop
    and land

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
var altIncrement = .1;
var altDecrement = .2;

var maxAltitude = .5;
var count = 0;
var maxAttempts = 10;
var timer;

client.on('changeAltitude', function(altitude){

    if(altitude > maxAltitude){

        count += 1;
        this.down(altDecrement);
    }
});

var climb = function(){

    if(count < maxAttempts){


        client.up(altIncrement);
    }else {

        clearInterval(timer);
        client.stop();
        client.land();
    }
}

timer = setInterval(climb, interval);