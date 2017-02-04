Package.describe({
  name: "nova:base-routes",
  summary: "Nova routes package",
<<<<<<< HEAD
  version: "0.26.4-nova",
=======
  version: "0.27.5-nova",
>>>>>>> refs/remotes/TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([

    // Nova packages

<<<<<<< HEAD
    'nova:core@0.26.4-nova',
    'nova:posts@0.26.4-nova',
    'nova:users@0.26.4-nova',
    'nova:comments@0.26.4-nova',
=======
    'nova:core@0.27.5-nova',
    'nova:posts@0.27.5-nova',
    'nova:users@0.27.5-nova',
    'nova:comments@0.27.5-nova',
>>>>>>> refs/remotes/TelescopeJS/master

    // third-party packages

    'utilities:react-list-container@0.1.10'
  ]);

  api.addFiles([
    'lib/routes.jsx'
  ], ['client', 'server']);

});
