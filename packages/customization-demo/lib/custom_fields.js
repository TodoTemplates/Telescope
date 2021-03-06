import Posts from "meteor/nova:posts";

/*
Let's assign a color to each post (why? cause we want to, that's why).
We'll do that by adding a custom field to the Posts collection.
Note that this requires our custom package to depend on nova:posts and nova:users.
*/

Posts.addField(
  {
    fieldName: 'color',
    fieldSchema: {
      type: String,
      control: "select", // use a select form control
      optional: true, // this field is not required
<<<<<<< HEAD:packages/customization-demo/lib/custom_fields.js
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['members'],
=======
      insertableIf: canInsert,
      editableIf: canEdit,
>>>>>>> origin/master:packages/my-custom-package/lib/custom_fields.js
      form: {
        options: function () { // options for the select form control
          return [
            {value: "white", label: "White"},
            {value: "yellow", label: "Yellow"},
            {value: "blue", label: "Blue"},
            {value: "red", label: "Red"},
            {value: "green", label: "Green"}
          ];
        }
      },
    }
  }
);
