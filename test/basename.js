var test = require('tape');
var basename = require('..').basename;

test('path.basename', function (t) {
    t.equal(basename('/a/b/c.css'), 'c.css');
    t.equal(basename('/a/b/c.css', '.css'), 'c');
    t.equal(basename('/a/b/c.css', '.scss'), 'c.css');
    t.equal(basename('/a/b/c.css', '.{sc,c,sa}ss'), 'c');
    t.equal(basename('/a/b/c.css', '.+(sc|c|sa)ss'), 'c');
    t.equal(basename('/a/b/c.scss', '.+(sc|c|sa)ss'), 'c');
    t.equal(basename('/a/b/c.sass', '.+(sc|c|sa)ss'), 'c');
    t.equal(basename('/a/b/c.sass', '.*'), 'c');
    t.end();
});

