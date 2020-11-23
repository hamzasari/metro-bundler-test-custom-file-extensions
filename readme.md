# Metro Bundler Test Custom File Extensions

After cloning this repo, you should run `yarn` command to install node_modules devDependencies.

You can use commands below to test for various platforms.

- `yarn start android` to bundle `*.android.js` files
- `yarn start desktop` to bundle `*.desktop.js` files
- `yarn start firetv` to bundle `*.firetv.js` files
- `yarn start ios` to bundle `*.ios.js` files
- `yarn start lgos` to bundle `*.lgos.js` files
- `yarn start ps4` to bundle `*.ps4.js` files
- `yarn start rdk` to bundle `*.rdk.js` files
- `yarn start stb` to bundle `*.stb.js` files
- `yarn start tizen` to bundle `*.tizen.js` files
- `yarn start tv` to bundle `*.tv.js` files
- `yarn start web` to bundle `*.web.js` files
- `yarn start webos` to bundle `*.webos.js` files
- `yarn start windows` to bundle `*.windows.js` files
- `yarn start xbox` to bundle `*.xbox.js` files

If you use `yarn start` command only or use an undefined platform with this command like `yarn start xbox360` then bundler will use default extension and in this case the default extension is `*.js`.

If you test with browser, the default platform will be web and bundler will use `*.web.js` as default.