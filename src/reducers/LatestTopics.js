import {LATEST_TOPICS_LOADED} from '../Actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LATEST_TOPICS_LOADED:
      return [].concat(action.payload);
    default:
      return state;
  }
};
