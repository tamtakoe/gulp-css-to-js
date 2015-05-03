# gulp-css-to-js [![NPM version](https://badge.fury.io/js/gulp-css-to-js.svg)](http://badge.fury.io/js/gulp-css-to-js)

> gulp plugin which convert css-file to js-file which makes style tag

## Install with [npm](npmjs.org)

```sh
npm install gulp-css-to-js
```

## Usage

```js
var cssToJs = require('gulp-css-to-js');

var scriptStream = gulp.src('src/**/*.js');
    
var styleStream = gulp.src('src/**/*.css')
    .pipe(cssToJs());
    
merge(scriptStream, styleStream)
    .pipe(concat('script.js'))
//the script.js will insert styles in DOM by running document.createElement('style')
```


## License

Copyright (c) 2014-2015 Oleg Istomin
Released under the MIT license

***