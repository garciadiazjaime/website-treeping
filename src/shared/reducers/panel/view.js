import { REQUEST_PANELS, RECEIVE_PANELS } from '../../actions/panel/view';

function panel(state = {
  isFetching: false,
  didInvalidate: false,
  data: [],
}, action) {
  switch (action.type) {
    case REQUEST_PANELS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_PANELS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.panels,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export const TEST = 'TEST';

export function panelsByUser(state = { }, action) {
  switch (action.type) {
    case REQUEST_PANELS:
    case RECEIVE_PANELS:
      return Object.assign({}, state, {
        [action.userId]: panel(state[action.userId], action),
      });
    default:
      return state;
  }
}
