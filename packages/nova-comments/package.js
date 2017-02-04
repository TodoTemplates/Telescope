Package.describe({
  name: "nova:comments",
  summary: "Telescope comments package",
<<<<<<< HEAD
  version: "1.0.0",
=======

  version: "0.27.5-nova",
>>>>>>> origin/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:core@1.0.0',
    'nova:posts@1.0.0',
    'nova:users@1.0.0'
  ]);

  api.use([
    'nova:notifications@1.0.0',
    'nova:email@1.0.0'
  ], ['client', 'server'], {weak: true});

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
