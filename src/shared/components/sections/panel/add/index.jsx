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
    const { entitySaved } = nextProps;
    if (entitySaved) {
      browserHistory.push('/');
    }
  }

  actionHandler(data) {
    const { dispatch } = this.props;
    dispatch(savePanel(data));
  }

  render() {
    return (<div className="container-fluid">
      <PanelForm action={this.actionHandler} />
    </div>);
  }
}

AcitivityAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  entitySaved: PropTypes.bool,
};

AcitivityAdd.defaultProps = {
  entitySaved: false,
};

export default PanelContainer(AcitivityAdd);
