Package.describe({
  name: "reduxfj:meteor-jsdom",
  summary: "A Meteor Wrapper for wordnet",
  version: "0.0.9",
  git: "https://github.com/reduxdj/meteor-jsdom"
});

Npm.depends({
    "jsdom": "6.3.0"
});

Package.on_use(function (api, where) {
  api.add_files('jsdom.js', 'server');
});