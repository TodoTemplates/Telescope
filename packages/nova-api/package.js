Package.describe({
  name: "nova:api",
  summary: "Telescope API package",
<<<<<<< HEAD
  version: "0.26.4-nova",
=======
  version: "0.27.5-nova",
>>>>>>> refs/remotes/TelescopeJS/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

<<<<<<< HEAD
  api.use(['nova:core@0.26.4-nova']);
=======
  api.use(['nova:core@0.27.5-nova']);
>>>>>>> refs/remotes/TelescopeJS/master

  api.mainModule("lib/server.js", "server");
  // api.mainModule("lib/client.js", "client");

});
