var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeReactReduxGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's React/Redux Generator"));
  },

  createApp: function(){
    this.copy('./src/actions/index.js', './src/app/actions/index.js');
    this.copy('./src/components/app.js', './src/components/app.js');
    this.copy('./style/style.css', './style/style.css')
    this.copy('./src/reducers/index.js', './src/reducers/index.js');
    this.copy('./test/components/app_test.js', './test/components/app_test.js');
    this.copy('./test/test_helper.js', './test/test_helper.js');
    this.copy('_gitignore', '.gitignore');
    this.copy('_babelrc', '.babelrc');
    this.copy('index.html', 'index.html');
    this.copy('package.json', 'package.json');
    this.copy('webpack.config.js', 'webpack.config.js');
  },

});

module.exports = GalvanizeReactReduxGenerator;
