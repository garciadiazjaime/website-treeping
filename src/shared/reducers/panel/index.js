import { SAVING_PANEL, PANEL_SAVED, REQUEST_PANEL, RECEIVE_PANEL } from '../../actions/panel';


function panel(state = {
  isProcessing: false,
  didInvalidate: false,
  data: {},
}, action) {
  switch (action.type) {
    case REQUEST_PANEL:
      return Object.assign({}, state, {
        isProcessing: true,
        didInvalidate: false,
      });
    case RECEIVE_PANEL:
      return Object.assign({}, state, {
        isProcessing: false,
        didInvalidate: false,
        data: action.panel,
      });
    case SAVING_PANEL:
      return Object.assign({}, state, {
        isProcessing: true,
        didInvalidate: false,
      });
    case PANEL_SAVED:
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

export function panelHelper(state = { }, action) {
  switch (action.type) {
    case REQUEST_PANEL:
    case RECEIVE_PANEL:
    case SAVING_PANEL:
    case PANEL_SAVED:
      return panel(state.panel, action);
    default:
      return state;
  }
}
