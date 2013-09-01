
exports.set = function(arClient){

    // Config - allow for useful event emitting
    arClient.config('general:navdata_demo', 'FALSE');

    // Altitude - currently commented out as it produces log spam
    // arClient.on('altitudeChange', function(altitude){

    //     log.info(">> Altitude is " + altitude);
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