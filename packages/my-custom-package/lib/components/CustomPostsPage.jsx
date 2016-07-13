import React from 'react';

const CustomPostsPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  if (post.preview) {
  return (
    <div className="posts-page">

      <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />

      <Telescope.components.PostsItem post={post}/>

      <div className="posts-preview-body">
        <ul className="mdl-list">
          {post.preview.map((name, index) =>
            <li className="mdl-list__item" key={ index }>
              <i className="material-icons mdl-list__item-icon">radio_button_unchecked</i>
              {name}
            </li>
          )}
        </ul>
      </div>

      <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>


      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>
  )} else {
    return (
      <div className="posts-page">

        <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />

        <Telescope.components.PostsItem post={post}/>

        <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

      </div>
      )}

};

CustomPostsPage.displayName = "PostsPage";


module.exports = CustomPostsPage;
export default CustomPostsPage;
