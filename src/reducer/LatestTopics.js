export default (state = [], action) => {
  switch (action.type) {
    case 'LatestTopics':
      return [].concat(action.payload);
    default:
      return state;
  }
};
