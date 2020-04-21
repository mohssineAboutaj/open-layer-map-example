const mix = require("laravel-mix");

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
// pkg to compress images

const src = "src/",
			dist = "dist/";

mix
	.js(`${src}js/bundle.js`, `${dist}js/bundle.js`)
	.sass(`${src}scss/bundle.scss`, `${dist}css/bundle.css`);
