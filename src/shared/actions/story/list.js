import RequestUtil from '../../utils/requestUtil';
import constants from '../../../constants';

export const REQUEST_STORIES = 'REQUEST_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';


function requestStories(userId) {
  return {
    type: REQUEST_STORIES,
    userId,
  };
}

function receiveStories(userId, data) {
  return {
    type: RECEIVE_STORIES,
    userId,
    stories: data.entity.data,
    receivedAt: Date.now(),
  };
}

function getStoriesHelper(userId) {
  return (dispatch) => {
    dispatch(requestStories(userId));
    return RequestUtil.get(`${constants.apiUrl}/user/${userId}/stories`)
      .then(response => dispatch(receiveStories(userId, response)));
  };
}

function shouldGetStories(state, userId) {
  const stories = state.storiesByGroup[userId] || {};
  return stories.isFetching !== true;
}

export function getStories(userId) {
  return (dispatch, getState) => {
    if (shouldGetStories(getState(), userId)) {
      return dispatch(getStoriesHelper(userId));
    }
    return null;
  };
}
