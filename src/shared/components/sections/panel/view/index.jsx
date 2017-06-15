
/* eslint max-len: [2, 500, 4] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
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

  getNavPanel(dir) {
    if (dir) {
      return [this.props.topUrl, style.arrowTop];
    }
    return ['/view/add', style.newPanelTop];
  }

  render() {
    const navPanelTop = this.getNavPanel(this.props.topUrl);
    const navPanelUrlTop = navPanelTop[0];
    const navPanelIconTop = navPanelTop[1];

    return (<div className={style.comicContainer}>
      <div className={style.panel}>
        <img src="/images/the-leap.png" alt="The Leap" />
        <div className={style.panelNavTools}>
          <Link to={navPanelUrlTop} className={navPanelIconTop} />
          <Link to={this.props.bottomUrl} className={style.arrowBottom} />
          <Link to={this.props.leftUrl}className={style.arrowLeft} />
          <Link to={this.props.rightUrl} className={style.arrowRight} />
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
};

PanelView.defaultProps = {
  topUrl: null,
  bottomUrl: 'panel/add',
  leftUrl: 'panel/add',
  rightUrl: 'panel/add',
};

export default PanelViewContainer(PanelView);
