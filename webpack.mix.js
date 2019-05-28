const { mix } = require('laravel-mix');

var nib = require('nib');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

	// Compile Stylus files
    mix.stylus('resources/assets/stylus/main.styl', 'public/css', { use: [ nib() ] }).options({
		processCssUrls: false
	});

    // Concat all vendor CSS
  	mix.styles([
		'public/css/vendor/normalize.css',
		'public/css/vendor/bootstrap.min.css',
		'public/css/vendor/bootstrap-glyphicon.min.css',
		'public/css/vendor/animate.css',
		'public/css/vendor/dataTables.bootstrap4.min.css',
		'public/css/vendor/jquery.filer.css',
		'public/css/vendor/owl.carousel.css',
		'public/css/vendor/daterangepicker.css'
  	], 'public/css/vendor.css');

  	// Concat all style sheets
  	mix.styles([
  	    "public/css/vendor.css",
  	    "public/css/main.css"
  	],'public/css/min.css');

  	// Compile ES6 & Vue
	mix.js(
		'resources/assets/js/app.js',
		'public/js/main.js'
    );

	// Concat all vendor Scripts
  	mix.scripts([
		'public/js/vendor/modernizr.min.js',
		'public/js/vendor/tether.min.js',
		'public/js/vendor/bootstrap.min.js',
		'public/js/vendor/validator.min.js',
		'public/js/vendor/popify.js',
		'public/js/vendor/jquery.dataTables.min.js',
		'public/js/vendor/dataTables.bootstrap4.min.js',
		'public/js/vendor/jquery.filer.min.js',
		'public/js/vendor/owl.carousel.min.js',
		'public/js/vendor/wow.min.js',
		'public/js/vendor/js.cookie.js',
		'public/js/vendor/moment-with-locales.js',
		'public/js/vendor/daterangepicker.js',
	], 'public/js/vendor.js');

      // Concat all Scripts
  	mix.scripts([
		'public/js/main.js',
		'public/js/vendor.js',
		'public/js/script.js'
    ], 'public/js/app.js');

  	// Version
  	//mix.version(['public/js/app.js']);