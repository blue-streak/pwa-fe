module.exports = function() {

    const {readFileSync, writeFileSync} = require('fs');
    const {join} = require('path');
    const dest = join(__dirname, '..', 'dist', 'index.html');

    const baseHTML = readFileSync(dest, 'utf8');

    const r = require('../render/dist/render/index');
    const html = r.render();

    writeFileSync(dest, baseHTML.replace(`<div id="app"></div>`, `<div id="app">${html}</div>`));
}
