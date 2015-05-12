'use strict';

// Second param is not mandatory, used only to force specific
// module version when nested dependencies cause conflict.
module.exports = function addJsxEngine(Mincer, babel) {

	var BabelEngine = Mincer.BabelEngine = function BabelEngine() {
		Mincer.Template.apply(this, arguments);
		babel = babel || Mincer.Template.libs.babel || require('babel-core');
	};

	require('util').inherits(BabelEngine, Mincer.Template);

	BabelEngine.prototype.evaluate = function evaluate(/*context, locals*/) {
		var transformed = babel.transform(this.data, {sourceMaps: true});
		this.data = transformed.code;


		// If your engine provides source map, put it here
		// 1. If internal paths exists on source map, those must be RELATIVE to
		//    current asset folder. Usually, that's ok.
		// 2. Map propetry `sourceContent` must be filled. If not - fill manually.

		this.map = transformed.map;


		// If your source can have dependencies, and engine can return
		// dependencies list, add pass path for automatic tracking.

		// context.dependOn(file1);
		// context.dependOn(file2);
	};

	Mincer.registerEngine('.babel', Mincer.BabelEngine);

};