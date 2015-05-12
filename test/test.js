'use strict';

var Mincer = require('mincer');
require('../')(Mincer);

var env = new Mincer.Environment(__dirname);
env.appendPath(__dirname + '/fixtures');

var compiledAsset = env.findAsset('example').toString();

if (eval(compiledAsset) === 'success') {
	console.log('OK');
} else {
	console.error('Failed to compile Babel');
	process.exit(1);
}
