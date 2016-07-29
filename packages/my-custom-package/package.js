Package.describe({
  name: "my-custom-package"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
    'nova:users'
  ]);

  api.addFiles([
    'lib/modules.js',
    'lib/CustomIcons.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/_color-definitions.scss',
    'lib/stylesheets/custom.scss',
    'lib/stylesheets/_functions.scss',
    'lib/stylesheets/_list.scss',
    'lib/stylesheets/_mixins.scss',
    'lib/stylesheets/_variables.scss'
  ], ['client']);

  api.addFiles([
    'lib/server/templates.js'
  ], ['server']);

  api.addAssets([
    'lib/server/emails/customNewPost.handlebars',
    'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});
