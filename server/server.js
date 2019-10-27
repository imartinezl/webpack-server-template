const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');
const compiler = webpack(config);
const express = require('express');
const app = express();

const sPort = 3030;

app.use(
  middleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.listen(sPort, function () {
    console.log('Example app listening on port '+sPort+'!\n');
});

app.get('/test', function(req,res){
    console.log('test endpoint');
    res.end(JSON.stringify({test:'ok'}));
});
