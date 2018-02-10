# PWA JH Store - Frontend application


<!--crossbow-docs-start-->
## Crossbow tasks

The following tasks have been defined by this project's Crossbow configuration.
Run any of them in the following way
 
```shell
$ crossbow run <taskname>
```
|Task name|Description|
|---|---|
|<pre>`build-all`</pre>|**Alias for:**<br>- `build`<br>- `app-shell`|
|<pre>`build`</pre>|Run the parcel bundler to create the production-ready assets|
|<pre>`serve`</pre>|Serve the dist folder (note: this will set `NODE_ENV=production`)|
|<pre>`app-shell`</pre>|Render the App shell. Alias for `render-clean render-ts render-output`|
|<pre>`render-clean`</pre>|**Alias for:**<br>- `@npm rm -rf render/**`|
|<pre>`render-ts`</pre>|**Alias for:**<br>- `@npm tsc src/render/index.tsx --jsx react --jsxFactory h --lib DOM,ES2015 --outDir render/dist`|
|<pre>`render-output`</pre>|**Alias for:**<br>- `@sh node render/dist/render/index.js`|
<!--crossbow-docs-end-->
