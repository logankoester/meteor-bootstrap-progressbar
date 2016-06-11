Package.describe({
  name: 'ldk:bootstrap-progressbar',
  version: '0.9.0',
  summary: 'Meteor wrapper package for bootstrap-progressbar',
  documentation: 'README.md' ,
  git: "https://github.com/logankoester/meteor-bootstrap-progressbar.git"
});

Package.onUse(function(api) {
  api.addFiles([
    'bower_components/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
    'bower_components/bootstrap-progressbar/bootstrap-progressbar.min.js'
  ], 'client');
});
