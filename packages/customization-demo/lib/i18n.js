/*
  Let's add an international label to the field added in custom_fields.js
*/

<<<<<<< HEAD:packages/customization-demo/lib/i18n.js
import { addStrings } from 'meteor/nova:core';

addStrings('en', {
=======
import Telescope from 'meteor/nova:lib';

Telescope.strings.en = {
  ...Telescope.strings.en, // get all the string translated
>>>>>>> origin/master:packages/my-custom-package/lib/intl.js
  "posts.color": "Color" // add a new one (collection.field: "Label")
});