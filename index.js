let proxy = require('http-proxy-middleware');
const fallback = require('express-history-api-fallback');
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
    app.use('/stubs', require('serve-static')('src/stubs'));
    app.use('/img', require('serve-static')('src/img'));
    app.use(bundler.middleware());
} else {

    /** PRODUCTION **/
    app.use(require('compression')());
    app.use(require('serve-static')('dist'));

    const root = `${__dirname}/dist`;
    app.use(fallback('index.html', { root: root }))
}

app.listen(Number(process.env.PORT || 1234));
