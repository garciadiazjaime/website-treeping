import { SAVING_STORY, STORY_SAVED, REQUEST_STORY, RECEIVE_STORY } from '../../actions/story';


function story(state = {
  isProcessing: false,
  didInvalidate: false,
  data: {},
}, action) {
  switch (action.type) {
    case REQUEST_STORY:
      return Object.assign({}, state, {
        isProcessing: true,
        didInvalidate: false,
      });
    case RECEIVE_STORY:
      return Object.assign({}, state, {
        isProcessing: false,
        didInvalidate: false,
        data: action.story,
      });
    case SAVING_STORY:
      return Object.assign({}, state, {
        isProcessing: true,
        didInvalidate: false,
      });
    case STORY_SAVED:
      return Object.assign({}, state, {
        isProcessing: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export const TEST = 'TEST';

export function storyHelper(state = { }, action) {
  switch (action.type) {
    case REQUEST_STORY:
    case RECEIVE_STORY:
    case SAVING_STORY:
    case STORY_SAVED:
      return story(state.story, action);
    default:
      return state;
  }
}
