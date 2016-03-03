#!/usr/bin/env node

var gitrc = require('./');
var meow  = require('meow');

var cli = meow([
  'Usage:',
  '  gitrc        List gitrcs',
  '  gitrc [name] Switch to the given gitrc'
], {
  alias: {
    h: 'help'
  }
});

if (cli.input[0]) {
  gitrc.set(cli.input[0]);
  console.log('Successfully switched to ' + cli.input[0]);
} else {
  var active = gitrc.get();
  console.log(gitrc.list().map(function(name) {
    return name + (name === active ? ' (active)' : '');
  }).join('\n'));
}
