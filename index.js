var path = require('path');
var mix = require('util-mix');
var requireDir = require('require-directory');

var extensions = requireDir(module, './lib');
mix(module.exports, extensions, path);
