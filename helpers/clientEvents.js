var log = require('./log');

exports.set = function(arClient){

    // Config - allow for useful event emitting
    arClient.config('general:navdata_demo', 'FALSE');

    // Basic flying states
    arClient.on('landing', function(){

        log.info("***** LANDING *****");
    });

    arClient.on('landed', function(){

        log.info("***** LANDED *****");
    });

    arClient.on('takeoff', function(){

        log.info("***** TAKING OFF *****");
    });

    arClient.on('flying', function(){

        log.info("***** FLYING *****");
    });

    arClient.on('hovering', function(){

        log.info("***** HOVERING *****");
    });

    //Altitude - currently commented out as it produces log spam
    // arClient.on('altitudeChange', function(altitude){

    //     log.info(">> Altitude is " + altitude);
    // });

    // Metadata of drone
    // this may also spam the console, but haven't run it yet.
    // arClient.on('navdata', function(data){

    //     log.info('NavData is ' + data);
    // });

    // Warn user drone has a low battery
    arClient.on('lowBattery', function(battery){

        log.warn("Battery is low " + battery);
    });

    arClient.on('batteryChange', function(battery){

        log.info("battery charge is now " + battery);
    });

    // Generic error catching
    arClient.on("error", function(error){

        log.error(error);
    });
};