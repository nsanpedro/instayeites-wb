function postComments(state = [], action) {
  // console.log(state, action);
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment

      }]
    case 'REMOVE_COMMENT':
    console.log('removing comment');

      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
        ];

    default:
      return state;

  }
  return state;
}

function comments(state = [], action) {
  // console.log(state, action);
  if(typeof action.postId !== 'undefined') {
    return {
      // current state
      ...state,
      // overwrite
      [action.postId]: postComments(state[action.postId], action)
    }

  }
  return state;
}

export default comments;
