var test = require('tape');
var replace = require('..').replaceExtname;

test('path.replaceExtname', function (t) {
    t.equal(replace('/a/b/c.scss', '.css'), '/a/b/c.css');
    t.equal(replace('/a/b/c.', '.css'), '/a/b/c.css');
    t.equal(replace('/a/b/c', '.css'), '/a/b/c.css');
    t.equal(replace('/a/b/c.scss', ''), '/a/b/c');
    t.equal(replace('/a/b/c', ''), '/a/b/c');
    t.end();
});
