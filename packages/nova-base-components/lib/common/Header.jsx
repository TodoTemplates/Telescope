import React from 'react';
import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/nova:core';

<<<<<<< HEAD

const Header = (props, context) => {

  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "Nova");
  const tagline = getSetting("tagline");
=======
<<<<<<< HEAD
const Header = ({currentUser}) => {

=======
const Header = (props, {currentUser}) => {
  
>>>>>>> refs/remotes/TelescopeJS/master
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");
>>>>>>> origin/master

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>

        <div className="nav">
          <div className="nav-links"><a href="http://blog.todotemplates.com" className="badge1" data-badge="2">Blog</a></div>
          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Components.PostsNewButton/>
          </div>

        </div>

      </header>
    </div>
  )
}

Header.displayName = "Header";

Header.propTypes = {
  currentUser: React.PropTypes.object,
};

registerComponent('Header', Header, withCurrentUser);
