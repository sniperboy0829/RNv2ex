export default (state = {}, action) => {
  switch (action.type) {
    case 'POSTS_LOAD':
      console.log('received POSTS_LOAD action');
      return {...state, posts: action.payload};
    default:
      return [];
  }
};
