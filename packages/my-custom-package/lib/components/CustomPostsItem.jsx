import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';

class CustomPostsItem extends Component {

renderCategories() {
  return this.props.post.categoriesArray ? <Telescope.components.PostsCategories post={this.props.post} /> : "";
}

renderCommenters() {
  return this.props.post.commentersArray ? <Telescope.components.PostsCommenters post={this.props.post}/> : "";
}

renderActions() {

  const component = (
    <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Telescope.components.PostsEditForm post={this.props.post}/>
    </ModalTrigger>
  );

  return (
    <div className="post-actions">
      {Users.can.edit(this.context.currentUser, this.props.post) ? component : ""}
    </div>
  )
}
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

        <div className="posts-item-import">
        <Link to={Posts.getLink(post)} className="post-import" target="_blank">
          Import
        </Link>
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

module.exports = CustomPostsItem;
export default CustomPostsItem;
