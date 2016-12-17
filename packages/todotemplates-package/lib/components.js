/*
This file centralizes all our custom component overrides.
*/

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomPostsPage from "./components/CustomPostsPage.jsx";
import CustomPostsList from "./components/CustomPostsList.jsx";
import CustomPostsThumbnail from "./components/CustomPostsThumbnail.jsx";
import CustomFooter from "./components/CustomFooter.jsx";
import CustomUsersAvatar from "./components/CustomUsersAvatar.jsx";
import CustomHeadTags from "./components/CustomHeadTags.jsx";
import CustomHeader from "./components/CustomHeader.jsx";

Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.PostsPage = CustomPostsPage;
Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsThumbnail = CustomPostsThumbnail;
Telescope.components.Footer = CustomFooter;
Telescope.components.UsersAvatar = CustomUsersAvatar;
Telescope.components.HeadTags = CustomHeadTags;
Telescope.components.Header = CustomHeader;
