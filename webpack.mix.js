const mix = require('laravel-mix'); 
require('laravel-mix-nunjucks')
const min = Mix.inProduction() ? '.min' : ''; 
 
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    
    mix.options({
        terser: {
            extractComments: false,
        },
        processCssUrls: false
    });

    mix.js('dev/js/main.js', `dist/assets/js/main${min}.js`) 
        .sass('dev/scss/main.scss', `dist/assets/css/main${min}.css`) 
		.njk('dev/html', 'dist/', { })
		// .postCss('dev/scss/tailwind.css', `dist/assets/css/tailwind${min}.css`, [ 
		// 	require('tailwindcss'),
		// ]) 
        .copy('dev/img', 'dist/assets/img')
        .copy('dev/css', 'dist/assets/css')
        .copy('dev/font', 'dist/assets/font')
        .copy('dev/js', 'dist/assets/js')
        .copy('dev/vendor', 'dist/assets/vendor');
}  