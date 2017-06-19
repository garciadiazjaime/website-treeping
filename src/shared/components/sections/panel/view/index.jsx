/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NavButton from '../../../layout/navButton';
import PanelViewContainer from '../../../../containers/panel/view';

import style from './style.scss';

class PanelView extends Component {

  constructor(args) {
    super(args);
    this.state = {
      data: [],
    };
  }

  render() {
    return (<div className={style.comicContainer}>
      <div className={style.panel}>
        <img src="/images/the-leap.png" alt="The Leap" />

        <NavButton url={this.props.topUrl} position="top" />
        <NavButton url={this.props.rightUrl} position="right" />
        <NavButton url={this.props.bottomUrl} position="bottom" />
        <NavButton url={this.props.leftUrl} position="left" />
        <div className={style.creatorToolContainer}>
          <Link to="/panel/edit" className={style.creatorTool}>
            <span className={style.editIcon} />
          </Link>
          <Link to="/panel/delete" className={style.creatorTool}>
            <span className={style.deleteIcon} />
          </Link>
        </div>
      </div>
    </div>);
  }
}

PanelView.propTypes = {
  topUrl: PropTypes.string,
  bottomUrl: PropTypes.string,
  leftUrl: PropTypes.string,
  rightUrl: PropTypes.string,
};

PanelView.defaultProps = {
  topUrl: null,
  rightUrl: null,
  bottomUrl: 'goto-bottom',
  leftUrl: 'goto-left',
};

export default PanelViewContainer(PanelView);
