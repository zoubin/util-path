var path = require('path');
var minimatch = require('minimatch');

module.exports = function (p, pattern) {
    var ext = path.extname(p);
    if (!ext || !pattern) {
        return path.basename(p);
    }
    ext = minimatch(ext, pattern) && ext || undefined;
    return path.basename(p, ext);
};
