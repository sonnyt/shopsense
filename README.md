ShopSense
=========
##Config
```
var ShopSense = require( 'shopsense' );

ShopSense.setup({
    APIKEY: 'YOUR API KEY'
});
```
##Products
```
ShopSense.products(null, { fl: [ 'd0', 'b3510', 'b689', 'r21' ] }, function( error, data, json ) {
  return res.status( 200 ).send( json );
});
```
