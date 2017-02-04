Package.describe({
  name: "nova:base-components",
  summary: "Telescope components package",
<<<<<<< HEAD
  version: "1.0.0",
  git: "https://github.com/TelescopeJS/Telescope.git"
=======
<<<<<<< HEAD
  version: "0.26.4-nova",
=======
  version: "0.27.5-nova",
>>>>>>> refs/remotes/TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope.git"
>>>>>>> origin/master
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    // Nova packages
<<<<<<< HEAD
    'nova:core@1.0.0',
    'nova:posts@1.0.0',
    'nova:users@1.0.0',
    'nova:comments@1.0.0',
    'nova:voting@1.0.0',
=======
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
>>>>>>> origin/master

    // third-party packages
    'fortawesome:fontawesome@4.5.0',
    'tmeasday:check-npm-versions@0.3.1',
    'std:accounts-ui@1.2.17',
    'utilities:react-list-container@0.1.10',
  ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
