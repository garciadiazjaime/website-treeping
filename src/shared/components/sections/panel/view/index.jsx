import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Button from '../../../layout/panelButton';
import PanelViewContainer from '../../../../containers/panel/view';

import style from './style.scss';

function PanelView({ panel }) {
  return (<div className={style.comicContainer}>
    <div className={style.panel}>
      <img src={panel.image} alt={panel.title} />

      <Button data={panel} position="top" />
      <Button data={panel} position="right" />
      <Button data={panel} position="bottom" />
      <Button data={panel} position="left" />

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

PanelView.propTypes = {
  panel: PropTypes.shape({}),
};

PanelView.defaultProps = {
  panel: {
    _id: 'panelId',
    image: '/images/the-leap.png',
    title: 'The Leap',
    children: {
      left: {
        _id: 'childrenLeftId',
      },
      top: {},
      right: {
        _id: 'childrenRightId',
      },
      bottom: {},
    },
  },
};

export default PanelViewContainer(PanelView);
