var pathExists = require('path-exists');
var userHome   = require('user-home');
var child      = require('child_process');
var path       = require('path');
var fs         = require('fs');

var gitrc  = path.resolve(userHome, '.gitrc');
var gitrcs = path.resolve(userHome, '.gitrcs');

exports.get = function() {
  if (!pathExists.sync(gitrc)) return;
  return path.basename(fs.realpathSync(gitrc))
};

exports.list = function() {
  if (!pathExists.sync(gitrcs)) return [];
  return fs.readdirSync(gitrcs);
};

exports.set = function(name) {
  var next = path.resolve(gitrcs, name);
  if (!pathExists.sync(next)) throw new Error('gitrc ' + name + ' does not exist.');
  if (pathExists.sync(gitrc)) fs.unlinkSync(gitrc);
  fs.symlinkSync(next, gitrc);
  child.execSync('sh ' + next);
};
