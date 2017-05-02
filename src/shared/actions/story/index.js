import RequestUtil from '../../utils/requestUtil';
import constants from '../../../constants';

export const REQUEST_STORY = 'REQUEST_STORY';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const SAVING_STORY = 'SAVING_STORY';
export const STORY_SAVED = 'STORY_SAVED';

function requestStory() {
  return {
    type: REQUEST_STORY,
  };
}

function receiveStory(data) {
  return {
    type: RECEIVE_STORY,
    story: data.entity.data,
    receivedAt: Date.now(),
  };
}

function savingStory() {
  return {
    type: SAVING_STORY,
  };
}

function storySaved() {
  return {
    type: STORY_SAVED,
    receivedAt: Date.now(),
  };
}

function getStoryHelper(storyId) {
  return (dispatch) => {
    dispatch(requestStory());
    return RequestUtil.get(`${constants.apiUrl}/story/${storyId}`)
      .then(response => dispatch(receiveStory(response)));
  };
}

function saveStoryHelper(data) {
  return (dispatch) => {
    dispatch(savingStory());
    return RequestUtil.post(`${constants.apiUrl}/story`, data)
      .then(() => dispatch(storySaved()));
  };
}

function updateStoryHelper(storyId, data) {
  return (dispatch) => {
    dispatch(savingStory());
    return RequestUtil.put(`${constants.apiUrl}/story/${storyId}`, data)
      .then(() => dispatch(storySaved()));
  };
}

function shouldProccessStory(state) {
  const story = state.StoryHelper;
  return story.isProcessing !== true;
}

export function getStory(storyId) {
  return (dispatch, getState) => {
    if (shouldProccessStory(getState())) {
      return dispatch(getStoryHelper(storyId));
    }
    return null;
  };
}

export function saveStory(data) {
  return (dispatch, getState) => {
    if (shouldProccessStory(getState())) {
      return dispatch(saveStoryHelper(data));
    }
    return null;
  };
}

export function updateStory(storyId, data) {
  return (dispatch, getState) => {
    if (shouldProccessStory(getState())) {
      return dispatch(updateStoryHelper(storyId, data));
    }
    return null;
  };
}
