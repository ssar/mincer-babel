'use strict';

var prop = require('mincer/lib/mincer/common').prop;

// stdlib
var path = require('path');

// Second param is not mandatory, used only to force specific
// module version when nested dependencies cause conflict.
module.exports = function addBabelEngine(Mincer, babel) {

	var BabelEngine = Mincer.BabelEngine = function BabelEngine() {
		Mincer.Template.apply(this, arguments);
		babel = babel || Mincer.Template.libs.babel || require('babel-core');
	};

	require('util').inherits(BabelEngine, Mincer.Template);

	BabelEngine.prototype.evaluate = function evaluate(context, locals) {
		var withSourcemap = context.environment.isEnabled('source_maps');
		var source = this.data;
		var dir = path.dirname(context.pathname);

		var transformed = babel.transform(source, {
			sourceMaps: withSourcemap,
			inputSourceMap: this.map,
			sourceRoot: path.dirname(context.pathname)
		});

		this.data = transformed.code;

		if(withSourcemap) {
			// If your engine provides source map, put it here
			// 1. If internal paths exists on source map, those must be RELATIVE to
			//    current asset folder. Usually, that's ok.
			// 2. Map propetry `sourceContent` must be filled. If not - fill manually.

			transformed.map.file = path.relative(dir, this.file);
			transformed.map.sources[0] = transformed.map.file;

			this.map = JSON.stringify(transformed.map);
		}

		// If your source can have dependencies, and engine can return
		// dependencies list, add pass path for automatic tracking.

		// context.dependOn(file1);
		// context.dependOn(file2);
	};

	Mincer.registerEngine('.es6', Mincer.BabelEngine);
	
	prop(Mincer.BabelEngine, 'defaultMimeType', 'application/javascript');
};
