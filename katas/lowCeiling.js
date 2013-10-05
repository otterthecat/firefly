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

var interval = 750
var speed = .2;
var altIncrement = .6;
var altDecrement = .5;

var maxAltitude = 2;
var count = 0;
var maxAttempts = 10;
var timer;

client.takeoff();


client.on('changeAltitude', function(altitude){

    console.log("+++++++++++++ Starting Down ");
    if(altitude > maxAltitude){

        count += 1;
        this.down(altDecrement);
    }
});

var climb = function(){

        console.log("+++++++++++++ DOWN ");

    if(count < maxAttempts){

        console.log("UP");
        client.up(altIncrement);
    }else {

        console.log("land");
        clearInterval(timer);
        client.stop();
        client.land();
    }
}

timer = setInterval(climb, interval);