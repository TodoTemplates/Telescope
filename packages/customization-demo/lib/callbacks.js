/*
Let's add a callback to the new post method that
appends a random emoji to the newly submitted post's title.
*/

<<<<<<< HEAD:packages/customization-demo/lib/callbacks.js
import { addCallback } from 'meteor/nova:core';
=======
import Telescope from 'meteor/nova:lib';
>>>>>>> origin/master:packages/my-custom-package/lib/callbacks.js

function PostsNewAddRandomEmoji (post, user) {

  post.title = post.title + " " +_.sample(["🎉", "💎", "☠", "⏱", "🎈", "⛱"])

  return post;
}
addCallback("posts.new.sync", PostsNewAddRandomEmoji);
