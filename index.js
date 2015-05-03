var through   = require('through2');
var escapeStr = require('js-string-escape');

var STYLE_HEADER = '!function(){var a="';
var STYLE_FOOTER = '",b=document.createElement("style");b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),(document.head||document.getElementsByTagName("head")[0]).appendChild(b)}();';

function cssTojs() {
    function transform(file, enc, callback) {

        var css = file.contents.toString();
        var content = STYLE_HEADER + escapeStr(css) + STYLE_FOOTER;

        file.contents = new Buffer(content);

        callback(null, file);
    }

    return through.obj(transform);
}

module.exports = cssTojs;