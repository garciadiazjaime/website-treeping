/* eslint max-len: [2, 500, 4] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// const style = require('./style.scss');

import { getPanels } from '../../../../actions/panel/view';
import PanelViewContainer from '../../../../containers/panel/view';
import NavButton from '../../../layout/navigation/panel-navigation-button';

class PanelView extends Component {

  constructor(args) {
    super(args);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { dispatch } = this.props;
    dispatch(getPanels(params.userId));
  }

  render() {
    return (<div>
      <Link to="/panel/add" className="pull-right">
        Hola
      </Link>
      <NavButton />
    </div>);
  }
}

PanelView.propTypes = {
  params: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PanelViewContainer(PanelView);
