// Imports
var arDrone = require('ar-drone');
var log = require('./helpers/log');

// Set Objects
var client = arDrone.createClient();

var move = function(command, duration){

    if(client.hasOwnProperty(command)){

        client[command](duration);
    } else {

        log('error', 'Command not property of ' + client);
    }
};

