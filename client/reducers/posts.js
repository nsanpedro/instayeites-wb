function posts(state = [], action) {
  console.log('POST IS GOING TO CHANGE!!');
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // increment case
      console.log('Incrementing likes');
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;

  }

}

export default posts;
