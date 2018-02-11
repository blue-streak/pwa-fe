let proxy = require('http-proxy-middleware');
let express = require('express-http2');
let app = express();

app.use(
    '/graphql',
    proxy({
        target: 'http://localhost:5000'
    })
);

console.log(`Listening on http://localhost:${Number(process.env.PORT || 1234)}`);
if (process.env.NODE_ENV !== "production") {
    let Bundler = require('parcel-bundler');
    let bundler = new Bundler('src/index.html');
    app.use('/service-worker.js', require('serve-static')('src/service-worker.js'));
    app.use(bundler.middleware());
} else {
    app.use(require('compression')());
    app.use(require('serve-static')('dist'));
    app.use('/node_modules', require('serve-static')('node_modules'));
}

app.listen(Number(process.env.PORT || 1234));
