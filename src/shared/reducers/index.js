import { combineReducers } from 'redux';

import { storyHelper } from './story';
import { storiesByUser } from './story/list';

const rootReducer = combineReducers({
  storyHelper,
  storiesByUser,
});

export default rootReducer;
