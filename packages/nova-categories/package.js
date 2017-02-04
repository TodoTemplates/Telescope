Package.describe({
  name: "nova:categories",
  summary: "Telescope tags package",
<<<<<<< HEAD
  version: "1.0.0",
=======
  version: "0.26.4-nova",
>>>>>>> origin/master
  git: "https://github.com/TelescopeJS/telescope-tags.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
<<<<<<< HEAD
    'nova:core@1.0.0',
    'nova:posts@1.0.0',
    'nova:users@1.0.0'
=======
    'nova:core@0.26.4-nova',
    'nova:posts@0.26.4-nova',
    'nova:users@0.26.4-nova'
>>>>>>> origin/master
  ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});