import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
<<<<<<< HEAD
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";
import Users from 'meteor/nova:users';
=======
<<<<<<< HEAD:packages/todotemplates-package/lib/components/CustomPostsItem.bak.jsx
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";
import Users from 'meteor/nova:users';
=======
// import { Button } from 'react-bootstrap';
// import moment from 'moment';
// import { ModalTrigger } from "meteor/nova:core";
// import Categories from "meteor/nova:categories";
>>>>>>> refs/remotes/TelescopeJS/master:packages/my-custom-package/lib/components/CustomPostsItem.jsx
>>>>>>> origin/master

class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color;
    }

    // ⭐ custom code ends here ⭐

    return (
      <div className={postClass}>

        <div className="posts-item-vote">
          <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
        </div>

        {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null}

        <div className="posts-item-content">

          <h3 className="posts-item-title">
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>
            {this.renderCategories()}
          </h3>

          <div className="posts-item-meta">
            {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
            <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
            <div className="posts-item-comments">
              <Link to={Posts.getPageUrl(post)}>
                <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
              </Link>
            </div>
            {(this.context.currentUser && this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
            {this.renderActions()}
          </div>

        </div>

        {this.renderCommenters()}
<<<<<<< HEAD
=======
<<<<<<< HEAD:packages/todotemplates-package/lib/components/CustomPostsItem.bak.jsx
>>>>>>> origin/master
        <div className="posts-item-import">
          <Link to={Posts.getLink(post)} className="post-import" target="_blank">
            Import
          </Link>
        </div>
<<<<<<< HEAD
=======
=======

>>>>>>> refs/remotes/TelescopeJS/master:packages/my-custom-package/lib/components/CustomPostsItem.jsx
>>>>>>> origin/master

      </div>
    )
  }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD:packages/todotemplates-package/lib/components/CustomPostsItem.bak.jsx
};
=======
}
>>>>>>> refs/remotes/TelescopeJS/master:packages/my-custom-package/lib/components/CustomPostsItem.jsx
>>>>>>> origin/master

CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;
