/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import PanelViewContainer from '../../../../containers/panel/view';

import style from './style.scss';

class PanelView extends Component {

  constructor(args) {
    super(args);
    this.state = {
      data: [],
    };
  }

  getNavPanel(dir) {
    if (dir) {
      return [dir, style.arrow];
    }
    return [this.props.addPanelUrl, style.newPanel];
  }

  render() {
    return (<div className={style.comicContainer}>
      <div className={style.panel}>
        <img src="/images/the-leap.png" alt="The Leap" />
        <div className={style.panelNavTools}>
          <Link to={this.getNavPanel(this.props.topUrl)[0]} className={`${this.getNavPanel(this.props.topUrl)[1]} ${style.posTop}`} />
          <Link to={this.getNavPanel(this.props.rightUrl)[0]} className={`${this.getNavPanel(this.props.rightUrl)[1]} ${style.posRight}`} />
          <Link to={this.getNavPanel(this.props.bottomUrl)[0]} className={`${this.getNavPanel(this.props.bottomUrl)[1]} ${style.posBottom}`} />
          <Link to={this.getNavPanel(this.props.leftUrl)[0]}className={`${this.getNavPanel(this.props.leftUrl)[1]} ${style.posLeft}`} />
        </div>
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
  addPanelUrl: PropTypes.string,
};

PanelView.defaultProps = {
  topUrl: null,
  rightUrl: null,
  bottomUrl: 'goto-bottom',
  leftUrl: 'goto-left',
  addPanelUrl: '/panel/add ',
};

export default PanelViewContainer(PanelView);
