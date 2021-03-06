const httpPort = 80;
const httpsPort = 443;
const koa = require( 'koa' );
const serve = require( 'koa-static' );
const http = require( 'http' );
const https = require( 'https' );
const fs = require( 'fs' );
const app = new koa();

app.use(serve());

http.createServer( app.callback() ).listen( httpPort, () => console.log( `sever is listening on ${httpPort}` ) );