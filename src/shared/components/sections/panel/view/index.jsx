import React, { Component } from 'react';
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

  render() {
    return (<div className={style.comicContainer}>
      <div className={style.panel}>
        <img src="/images/the-leap.png" alt="The Leap" />
        <div className={style.panelNavTools}>
          <Link to="/panel/top" className={style.arrowTop} />
          <Link to="/panel/bottom" className={style.arrowBottom} />
          <Link to="/panel/left" className={style.arrowLeft} />
          <Link to="/panel/right" className={style.arrowRight} />
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

export default PanelViewContainer(PanelView);
