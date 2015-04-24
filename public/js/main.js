(function (requirejs) {
    'use strict';

    var vendorDir = './bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            jquery: vendorDir + 'jquery/dist/jquery'
        },
        // shim: {
        //     angular: {
        //         exports : 'angular'
        //     },
        //     lodash: {
        //         exports: '_'
        //     },
        //     angularAnimate: {deps: ['angular']},
        //     angularSanitize: {deps: ['angular']},
        //     ionic:  {deps: ['angular'], exports : 'ionic'}
        // },
        deps: ['app']
    });

}(this.requirejs));