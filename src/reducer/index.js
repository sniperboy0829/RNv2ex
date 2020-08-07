import {combineReducers} from 'redux';
import TopTopics from './TopTopics';
import LatestTopics from './LatestTopics';

export default combineReducers({
  topTopics: TopTopics,
  latestTopics: LatestTopics,
});
