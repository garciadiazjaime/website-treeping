/* eslint max-len: [2, 500, 4] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { Component } from 'react';
import { Link } from 'react-router';
// import { getPanels } from '../../../../actions/panel/view';
import PanelViewContainer from '../../../../containers/panel/view';

const style = require('./style.scss');

class PanelView extends Component {

  constructor(args) {
    super(args);
    this.state = {
      data: [],
    };
  }

<<<<<<< HEAD
  /* componentDidMount() {
    const { params } = this.props;
    const { dispatch } = this.props;
    dispatch(getPanels(params.userId));
  }*/

  render() {
    return (<div className={style.comicContainer}>
      <div className={style.panel}>
        <div className={style.panelNavTools}>
          <Link to="/panel/top" className={style.arrowTop} />
          <Link to="/panel/bottom" className={style.arrowBottom} />
          <Link to="/panel/left" className={style.arrowLeft} />
          <Link to="/panel/right" className={style.arrowRight} />
        </div>
        <div className={style.creatorToolContainer}>
          <Link to="/panel/delete" className={style.creatorTool}>
            <span className={style.editIcon} />
          </Link>
          <Link to="/panel/edit" className={style.creatorTool}>
            <span className={style.deleteIcon} />
          </Link>
        </div>
      </div>
    </div>);
  }
}

PanelView.propTypes = {
  /* params: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,*/
};

export default PanelViewContainer(PanelView);
