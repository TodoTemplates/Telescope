Package.describe({
  name: "nova:base-components",
  summary: "Telescope components package",
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
    'fortawesome:fontawesome@4.5.0',
    'tmeasday:check-npm-versions@0.3.1',
    'std:accounts-ui@1.2.6',
    'utilities:react-list-container@0.1.10',
  ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");
  
});
