import { addAction, addReducer } from 'meteor/nova:core';

addAction({
  postsViewed: {
    setViewed: (postId) => ({
      type: 'SET_VIEWED',
      postId,
    }),
  },
});

addReducer({
  postsViewed: (state = [], action) => {
    if (action.type === 'SET_VIEWED') {
      return [
        ...state,
        action.postId,
      ];
    }
    
    return state;
  },
});
