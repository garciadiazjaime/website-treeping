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

        <NavButton data={this.props.panel.top} />
        <NavButton data={this.props.panel.right} />
        <NavButton data={this.props.panel.bottom} />
        <NavButton data={this.props.panel.left} />
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
  panel: PropTypes.shape({
    top: PropTypes.shape({}),
    right: PropTypes.shape({}),
    bottom: PropTypes.shape({}),
    left: PropTypes.shape({}),
  }),
};

PanelView.defaultProps = {
  panel: {
    top: {
      position: 'top',
      url: '/panel/top',
    },
    right: {
      position: 'right',
      url: null,
    },
    bottom: {
      position: 'bottom',
      url: '/panel/bottom',
    },
    left: {
      position: 'left',
      url: null,
    },
  },
};

export default PanelViewContainer(PanelView);
