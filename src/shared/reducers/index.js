import { combineReducers } from 'redux';

import { panelHelper } from './panel';
import { panelsByUser } from './panel/view';

const rootReducer = combineReducers({
  panelHelper,
  panelsByUser,
});

export default rootReducer;
