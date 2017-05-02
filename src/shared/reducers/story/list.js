import { REQUEST_STORIES, RECEIVE_STORIES } from '../../actions/story/list';

function story(state = {
  isFetching: false,
  didInvalidate: false,
  data: [],
}, action) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.stories,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export const TEST = 'TEST';

export function storiesByUser(state = { }, action) {
  switch (action.type) {
    case REQUEST_STORIES:
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        [action.userId]: story(state[action.userId], action),
      });
    default:
      return state;
  }
}
