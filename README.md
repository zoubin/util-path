# util-path
extend node path module with useful methods

## path.replaceExtname(filename, [ext=''])

Replace extname of filename with ext.

```javascript
var replace = require('util-path').replaceExtname;

replace('/a/b/c.scss', '.css'); // '/a/b/c.css'
replace('/a/b/c.scss'); // '/a/b/c'
```

## path.basename(filename, pattern)

Extend original `path.basename`, so that the second pattern can be a pattern proper for [minimatch](https://www.npmjs.com/package/minimatch)

```javascript
var basename = require('util-path').basename;

basename('/a/b/c.scss', '.{sc,c,sa}ss'); // 'c'
basename('/a/b/c.scss', '.*'); // 'c'
```

