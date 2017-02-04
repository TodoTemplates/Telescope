import Users from './collection.js';
import { Utils, getSetting } from 'meteor/nova:lib';

Users.getNotificationProperties = function (user) {
  const properties = {
    profileUrl: Users.getProfileUrl(user),
<<<<<<< HEAD
    username: Users.getDisplayName(user),
    siteTitle: Telescope.settings.get('title'),
    siteUrl: Telescope.utils.getSiteUrl()
=======
    displayName: Users.getDisplayName(user),
    siteTitle: getSetting('title'),
    siteUrl: Utils.getSiteUrl()
>>>>>>> refs/heads/jeffsdevel
  };
  return properties;
};
