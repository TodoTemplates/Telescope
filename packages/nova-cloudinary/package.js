Package.describe({
  name: 'nova:cloudinary',
  summary: 'Telescope file upload package.',
<<<<<<< HEAD
  version: '1.0.0',
=======

  version: '0.27.5-nova',
>>>>>>> origin/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:posts@1.0.0',
    'nova:core@1.0.0'
  ]);

  api.addFiles([
    'lib/custom_fields.js'
  ], ['client', 'server']);

  api.addFiles([

  ], ['client']);

  api.addFiles([
    'lib/server/cloudinary.js'
  ], ['server']);

  api.mainModule("lib/server.js", "server");

});
