var request = require('request');

(function( exports ) {
    'use strict';

    var _config = {
            APIKEY: '',
            base: 'http://api.shopstyle.com/api/v2/'
        },
        _getUrl = function( root, query ) {
            var len;

            if ( !root ) {
                return;
            }

            var url = _config.base + root + '?pid=' + _config.APIKEY;

            if ( query ) {
                for ( var key in query ) {
                    if ( query[key] instanceof Array ) {
                        len = query[key].length;

                        while( len-- ) {
                            url += '&' + key + '=' + encodeURIComponent( query[key][len] );
                        }
                    } else {
                        url += '&' + key + '=' + encodeURIComponent( query[key] );
                    }
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

        _config.APIKEY = config.APIKEY;
    };

    /**
     * Fetch Brand
     * @param  {Function} callback
     */
    exports.brands = function( callback ) {
        var url = _getUrl( 'brands' );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Fetch Categories
     * @param  {Object}   query
     * @param  {Function} callback
     */
    exports.category = function( query, callback ) {
        var url = _getUrl( 'category', query );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Fetch Colors
     * @param  {Function} callback
     */
    exports.color = function( callback ) {
        var url = _getUrl( 'colors' );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Browser Products
     * @param  {String}   category
     * @param  {Object}   query
     * @param  {Function} callback
     */
    exports.browse = function( category, query, callback ) {
        if ( !category ) {
            return category;
        }

        var url = _getUrl( 'browse/' + category, query );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Products
     * @param  {String}   search
     * @param  {Object}   query
     * @param  {Function} callback
     */
    exports.products = function( search, query, callback ) {
        query.ftps = search;

        var url = _getUrl( 'products', query );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Get Product By ID
     * @param  {String}   id
     * @param  {Function} callback
     */
    exports.product = function( id, callback ) {
        if ( !id ) {
            return id;
        }

        var url = _getUrl( 'products/' + id, root );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

    /**
     * Get Retailer
     * @param  {Function} callback
     */
    exports.retailers = function( callback ) {
        var url = _getUrl( 'retailers' );

        request( url, function( error, response, html ) {
            if ( typeof( callback ) === 'function' ) {
                callback( error, response, html );
            }
        });
    };

}( typeof exports === 'object' && exports || this ));
