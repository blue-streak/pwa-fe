process.env.NODE_ENV = 'production';
let Bundler = require('parcel-bundler');
let bundler = new Bundler('src/index.html', {
    cache: false,
    publicUrl: '/'
});

bundler.addAssetType('.html', require.resolve('./parcel-plugin-render.js'));

const r = bundler.bundle();

r.then((res) => {
    process.exit(0);
})
.catch(e => console.error(e))
