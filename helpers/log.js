var colors = require('colors');

var types = {
	'warn': {
		'color': 'yellow',
		'style': '==============================',
		'label': 'Ummm... '
	},
	'info': {
		'color': 'blue',
		'style': '------------------------------',
		'label': 'Hey, you! '
	},
	'error': {
		'color': 'red',
		'style': '+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=',
		'label': 'Uh-oh: '
	}
};

var log = function(type, data){

	var msgType = types[type];
	var style = msgType.style;
	var color = msgType.color;

	console.log(style[color]);
	console.log(msgType.label[color] + data);
	console.log(style[color]);
};

exports.warning = function(data){

	log('warn', data);
};

exports.error = function(data){

	log('error', data);
};

exports.info = function(data){

	log('info', data)
};