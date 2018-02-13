const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

module.exports = class HbsAsset extends HTMLAsset {

    constructor(name, pkg, options) {
        super(name, pkg, options);
    }

    async transform() {

        await exec('cb render-ts');
        const render = require('./render/dist/render/index');
        const html = this.parse(render.render());

        this.ast.match({tag: 'div'}, function(node) {
            if (node.attrs && node.attrs.id === 'app') {
                node.content = html;
            }
            return node;
        });
    }
};
