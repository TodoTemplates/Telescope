Package.describe({
  name: "nova:base-styles",
  summary: "Nova basic styles package",
<<<<<<< HEAD
  version: "1.0.0",
=======
<<<<<<< HEAD
  version: "0.26.4-nova",
=======
  version: "0.27.5-nova",
>>>>>>> refs/remotes/TelescopeJS/master
>>>>>>> origin/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
<<<<<<< HEAD
    'nova:core@1.0.0',
=======
<<<<<<< HEAD
    'nova:core@0.26.4-nova',
    'fourseven:scss@3.4.1',
=======
    'nova:core@0.27.5-nova',
>>>>>>> origin/master
    'fourseven:scss',
>>>>>>> refs/remotes/TelescopeJS/master
    // 'juliancwirko:postcss@1.0.0-rc.4',
    // 'seba:minifiers-autoprefixer@0.0.1',
    // 'twbs:bootstrap@=4.0.0-alpha.2'
  ]);

  api.addFiles([
    'lib/stylesheets/bootstrap.css',
    'lib/stylesheets/main.scss'
  ], ['client']);

});
