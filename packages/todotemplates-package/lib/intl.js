/*
  Let's add an international label to the field added in custom_fields.js
*/
Telescope.strings.en = {
  ...Telescope.strings.en, // get all the string translated
  "posts.color": "Color", // add a new one (collection.field: "Label")
  "posts.body": "Body (Optional)", // add a new one (collection.field: "Label")
  "posts.description": "Short Description*", // add a new one (collection.field: "Label")
  "posts.title": "Title*", // add a new one (collection.field: "Label")
  "posts.url": "URL*" // add a new one (collection.field: "Label")
};
