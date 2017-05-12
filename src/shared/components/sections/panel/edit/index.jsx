/* eslint max-len: [2, 500, 4] */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import PanelForm from '../form';
import PanelContainer from '../../../../containers/panel';
import { getPanel, updatePanel } from '../../../../actions/panel';

class PanelEdit extends Component {

  constructor(args) {
    super(args);
    this.actionHandler = this.actionHandler.bind(this);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getPanel(params.panelId));
  }

  componentWillReceiveProps(nextProps) {
    const { userId, lastUpdated } = nextProps;
    if (lastUpdated) {
      browserHistory.push(`/user/${userId}/panel?success`);
    }
  }

  actionHandler(panelId, data) {
    const { dispatch } = this.props;
    dispatch(updatePanel(panelId, data));
  }

  render() {
    const { panel, lastUpdated } = this.props;
    return panel && panel.userId ? 'Loading' : (<div className="container-fluid">
      <PanelForm action={this.actionHandler} userId={panel.userId} panel={panel} lastUpdated={lastUpdated} />
    </div>);
  }
}

PanelEdit.propTypes = {
  params: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  panel: PropTypes.shape({}),
  lastUpdated: PropTypes.number,
  userId: PropTypes.string,
};

PanelEdit.defaultProps = {
  panel: {},
  lastUpdated: null,
  userId: null,
};


export default PanelContainer(PanelEdit);
