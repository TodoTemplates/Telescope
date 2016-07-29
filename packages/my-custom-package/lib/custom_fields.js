import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';

Posts.addField(
  {
    fieldName: 'color',
    fieldSchema: {
      type: String,
      control: "select", // use a select form control
      optional: true, // this field is not required
      insertableIf: Users.is.memberOrAdmin, // insertable by regular logged in users and admins
      editableIf: Users.is.ownerOrAdmin, // editable by the post's owner or admins
      autoform: {
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
      publish: true // make that field public and send it to the client
    }
  }
);


Posts.addField(
  {
    fieldName: 'preview',
    fieldSchema: {
      type: [String],
      optional: true, // this field is not required
      publish: true // make that field public and send it to the client
    }
  }
);

Posts.addField(
  {
    fieldName: 'unsplashNumber',
    fieldSchema: {
      type: String,
      optional: true, // this field is not required
      publish: true // make that field public and send it to the client
    }
  }
);

Posts.addField(
  {
    fieldName: 'description',
    fieldSchema: {
      type: String,
      optional: false, // this field is not required
      publish: true, // make that field public and send it to the client
      insertableIf: Users.is.memberOrAdmin, // insertable by regular logged in users and admins
      editableIf: Users.is.ownerOrAdmin, // editable by the post's owner or admins
      order: 21,
      control: "text",
      max: 500
    }
  }
);
/*
The main post list view uses a special object to determine which fields to publish,
so we also add our new field to that object:
*/

import PublicationUtils from 'meteor/utilities:smart-publications';

PublicationUtils.addToFields(Posts.publishedFields.list, ["color"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["preview"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["unsplashNumber"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["description"]);
