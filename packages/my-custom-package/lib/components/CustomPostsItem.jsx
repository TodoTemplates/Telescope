import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";
import Users from 'meteor/nova:users';

class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "mdl-list__item mdl-list__item--three-line";
    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color;
    }

    // ⭐ custom code ends here ⭐


    return (


      <div className={postClass}>
        <div className="mdl-list__item-primary-content">

          {post.user? <div className="mdl-list__item-avatar"><Telescope.components.UsersAvatar user={post.user} size="large"/></div> : null}

          <div className="posts-item-title-link">
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>  {this.renderCategories()}
          </div>

          <span className="mdl-list__item-text-body">
            <Link to={Posts.getPageUrl(post)} className="mdl-list__item-text-body-link">
              {post.description}
            </Link>
            &nbsp; - {post.user? <Telescope.components.UsersName user={post.user}/> : null}
            {(this.context.currentUser && this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
            {this.renderActions()}
          </span>
          </div>
          <div className="mdl-list__item-secondary-content">
            <div className="mdl-list__item-secondary-action-hover">
              <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
            </div>
            <div className="mdl-list__item-secondary-action">
              <Link to={Posts.getLink(post)} className="post-import" target="_blank">
                <i className="icon fa fa-fw fa-download" aria-hidden="true"></i> Import
              </Link>
            </div>
          </div>
      </div>

    )
  }
};

CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;
