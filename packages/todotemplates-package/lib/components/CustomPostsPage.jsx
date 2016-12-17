import React from 'react';
import { Link } from 'react-router';

const CustomPostsPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  if (post.preview) {
  return (
    <div className="posts-page">

      <Telescope.components.HeadTags url={"http://todotemplates.com"+Posts.getPageUrl(post)} title={post.title} image={post.thumbnailUrl} description={post.description} />

      <Telescope.components.PostsItem post={post}/>

      {post.body ? <div className="posts-page-body container" dangerouslySetInnerHTML={htmlBody}></div> : null}

      <div className="posts-preview-body">
        <span className="posts-preview-body-title">Preview</span>
        <ul className="mdl-list">
          {post.preview.map((name, index) =>
            <li className="mdl-list__item" key={ index }>
              <i className="material-icons mdl-list__item-icon">radio_button_unchecked</i>
              {name}
            </li>
          )}
        </ul>
      </div>

      <div className="post-import-large">
          <Link to={Posts.getLink(post)} className="btn btn-primary" target="_blank">
            Import This Project
          </Link>
      </div>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>
  )} else {
    return (
      <div className="posts-page">

        <Telescope.components.HeadTags url={"http://todotemplates.com"+Posts.getPageUrl(post)} title={post.title} image={post.thumbnailUrl} description={post.description} />

        <Telescope.components.PostsItem post={post}/>

        {post.body ? <div className="posts-page-body container" dangerouslySetInnerHTML={htmlBody}></div> : null}

        <div className="post-import-large">
            <Link to={Posts.getLink(post)} className="btn btn-primary" target="_blank">
              Import This Project
            </Link>
        </div>

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

      </div>
      )}

};

CustomPostsPage.displayName = "PostsPage";


module.exports = CustomPostsPage;
export default CustomPostsPage;
