// For any third party dependencies, like jQuery, place them in the lib folder.
// var requirejs = require('require');
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    baseUrl: './',
    paths: {
        app: '../js'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
console.log('inside config...');
require(['js/index']);