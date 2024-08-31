let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack intlTelInput steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//for vue js
mix.js('resources/js/app.js', 'public/js').vue()
.postCss('resources/css/app.css', 'public/css', [
    //
]);

mix.copyDirectory('public/assets/rajuk/fonts', 'public/fonts');
mix.copyDirectory('public/assets/plugins/fontawesome-free/webfonts', 'public/webfonts');
mix.copyDirectory('public/assets/rajuk/images', 'public/images');

mix.styles([
    'public/assets/plugins/bootstrap/css/bootstrap4.min.css',
    'public/assets/stylesheets/homepage_custom.css',
    'public/assets/stylesheets/custom.css',
    'public/assets/plugins/fontawesome-free/css/all.min.css',
    'public/assets/rajuk/css/bootstrap.min.css',
    'public/assets/rajuk/css/rajuk-style.css',
    'public/assets/rajuk/css/rajuk-responsive.css',
], 'public/css/home.css')
    .combine([
        'public/assets/rajuk/js/jquery-3.6.3.min.js',
        'public/assets/rajuk/js/popper.min.js',
        'public/assets/rajuk/js/bootstrap.min.js',
        'public/assets/rajuk/js/script.js',
        'public/assets/scripts/custom.js',
    ], 'public/js/home.js')
    .minify('public/css/home.css')
    .minify('public/js/home.js')
    .version();


mix.combine([
    'public/assets/scripts/oss_dashboard.js',
    'public/url_webservice/action_info.js',
    'public/assets/scripts/custom.js',
], 'public/js/admin.js').version();


mix.babel('public/assets/scripts/home_page.js', 'public/assets/scripts/home_page.min.js')
    .babel('public/assets/modules/signup/identity_verify.js', 'public/assets/modules/signup/identity_verify.min.js')
    .babel('public/assets/scripts/common_form_script.js', 'public/assets/scripts/common_form_script.min.js')
    .babel('public/assets/scripts/sonali_payment.js', 'public/assets/scripts/sonali_payment.min.js')
    .babel('public/assets/scripts/custom.js', 'public/assets/scripts/custom.min.js')
    .minify('public/assets/stylesheets/custom.css')
    .minify('public/assets/plugins/jquery/jquery.min.js')
    .minify('public/assets/plugins/bootstrap/js/bootstrap.bundle.min.js')
    .version();

