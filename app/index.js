var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeExpreessGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's React/Redux Generator"));
  },

  createApp: function(){
    this.copy('./src/app.jsx', './src/app.jsx');
    this.copy('./sass/style.css', './sass/style.css');
    this.copy('package.json');
    this.copy('.gitignore', '.gitignore');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

});

module.exports = GalvanizeExpreessGenerator;
