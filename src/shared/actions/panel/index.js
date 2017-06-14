import RequestUtil from '../../utils/requestUtil';
import constants from '../../../constants';

export const REQUEST_PANEL = 'REQUEST_PANEL';
export const RECEIVE_PANEL = 'RECEIVE_PANEL';
export const SAVING_PANEL = 'SAVING_PANEL';
export const PANEL_SAVED = 'PANEL_SAVED';

function requestPanel() {
  return {
    type: REQUEST_PANEL,
  };
}

function receivePanel(data) {
  return {
    type: RECEIVE_PANEL,
    panel: data.entity.data,
    receivedAt: Date.now(),
  };
}

function savingPanel() {
  return {
    type: SAVING_PANEL,
  };
}

function panelSaved() {
  return {
    type: PANEL_SAVED,
    receivedAt: Date.now(),
  };
}

function getPanelHelper(panelId) {
  return (dispatch) => {
    dispatch(requestPanel());
    return RequestUtil.get(`${constants.apiUrl}/panel/${panelId}`)
      .then(response => dispatch(receivePanel(response)));
  };
}

function savePanelHelper(data) {
  return (dispatch) => {
    dispatch(savingPanel());
    return RequestUtil.submit(`${constants.apiUrl}/panel`, data)
      .then(() => dispatch(panelSaved()));
  };
}

function updatePanelHelper(panelId, data) {
  return (dispatch) => {
    dispatch(savingPanel());
    return RequestUtil.put(`${constants.apiUrl}/panel/${panelId}`, data)
      .then(() => dispatch(panelSaved()));
  };
}

function shouldProccessPanel(state) {
  const panel = state.PanelHelper || {};
  return panel.isProcessing !== true;
}

export function getPanel(panelId) {
  return (dispatch, getState) => {
    if (shouldProccessPanel(getState())) {
      return dispatch(getPanelHelper(panelId));
    }
    return null;
  };
}

export function savePanel(data) {
  return (dispatch, getState) => {
    if (shouldProccessPanel(getState())) {
      return dispatch(savePanelHelper(data));
    }
    return null;
  };
}

export function updatePanel(panelId, data) {
  return (dispatch, getState) => {
    if (shouldProccessPanel(getState())) {
      return dispatch(updatePanelHelper(panelId, data));
    }
    return null;
  };
}
