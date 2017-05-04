import RequestUtil from '../../utils/requestUtil';
import constants from '../../../constants';

export const REQUEST_PANELS = 'REQUEST_PANELS';
export const RECEIVE_PANELS = 'RECEIVE_PANELS';


function requestPanels(userId) {
  return {
    type: REQUEST_PANELS,
    userId,
  };
}

function receivePanels(userId, data) {
  return {
    type: RECEIVE_PANELS,
    userId,
    panels: data.entity.data,
    receivedAt: Date.now(),
  };
}

function getPanelsHelper(userId) {
  return (dispatch) => {
    dispatch(requestPanels(userId));
    return RequestUtil.get(`${constants.apiUrl}/user/${userId}/panels`)
      .then(response => dispatch(receivePanels(userId, response)));
  };
}

function shouldGetPanels(state, userId) {
  const panels = state.panelsByGroup[userId] || {};
  return panels.isFetching !== true;
}

export function getPanels(userId) {
  return (dispatch, getState) => {
    if (shouldGetPanels(getState(), userId)) {
      return dispatch(getPanelsHelper(userId));
    }
    return null;
  };
}
