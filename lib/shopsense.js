var request = require('request');

(function( exports ) {
    'use strict';

    var _config = {
            APIKEY: '',
            base: 'http://api.shopstyle.com/api/v2/'
        },
        getUrl = function( root, query ) {
            if ( !root ) {
                return;
            }

            var url = _config.base + root + '?pid=' + _config.APIKEY;

            if ( query ) {
                for ( var key in query ) {
                    url += '&' + key + '=' + encodeURIComponent( query[key] );
                }
            }

            return url;
        };

    /**
     * Initilize
     * @param  {Object} config
     */
    exports.setup = function( config ) {
        if ( !config || !config.APIKEY ) {
            return;
        }

        _config.API = config.APIKEY;
    };

    /**
     * Fetch Brand
     * @param  {Function} callback
     */
    exports.brand = function( callback ) {
        var url = getUrl( 'brand' );

        request( url, function( error, response, html ) {
            callback( error, response, html );
        });
    };

    /**
     * Fetch Categories
     * @param  {Object}   query
     * @param  {Function} callback
     */
    exports.category = function( query, callback ) {
        var url = getUrl( 'category', query );

        request( url, function( error, response, html ) {
            callback( error, response, html );
        });
    };

    /**
     * Fetch Colors
     * @param  {Function} callback
     */
    exports.color = function( callback ) {
        var url = getUrl( 'colors' );

        request( url, function( error, response, html ) {
            callback( error, response, html );
        });
    };

    /**
     * Browser Products
     */
    exports.browse = function( category, query, callback ) {
        var root = ( category ) ? 'browse/' + category : 'browse',
            url = getUrl( root, query );

        request( url, function( error, response, html ) {
            callback( error, response, html );
        });
    };

    /**
     * Get Product
     * @return {[type]} [description]
     */
    exports.product = function() {
        var url = getUrl( 'colors' );

        request( url, function( error, response, html ) {
            callback( error, response, html );
        });
    };

    exports.retailers = function() {

    };

}( typeof exports === 'object' && exports || this ));
