/* eslint max-len: [2, 500, 4] */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import PanelForm from '../form';
import PanelContainer from '../../../../containers/panel';
import { savePanel } from '../../../../actions/panel';

class AcitivityAdd extends Component {

  constructor(args) {
    super(args);
    this.actionHandler = this.actionHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { userId, lastUpdated } = nextProps;
    if (lastUpdated) {
      browserHistory.push(`/user/${userId}/panel?success`);
    }
  }

  actionHandler(userId, data) {
    const { dispatch } = this.props;
    dispatch(savePanel(userId, data));
  }

  render() {
    const { params } = this.props;
    return (<div className="container-fluid">
      <PanelForm action={this.actionHandler} userId={params.userId} />
    </div>);
  }
}

AcitivityAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({}).isRequired,
  lastUpdated: PropTypes.number,
  userId: PropTypes.string,
};

AcitivityAdd.defaultProps = {
  lastUpdated: null,
  userId: null,
};

export default PanelContainer(AcitivityAdd);
