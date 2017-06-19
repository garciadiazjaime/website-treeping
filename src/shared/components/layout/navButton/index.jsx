/* eslint max-len: [2, 500, 4] */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');

export default class navButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getNavPanel(url, position) {
    if (url) {
      return [position, style.arrow];
    }
    return [this.props.addPanelUrl + '_' + position, style.newPanel];
  }

  getPosition() {
    const position = this.props.position;
    switch (position) {
      case 'top':
        return style.posTop;
      case 'right':
        return style.posRight;
      case 'bottom':
        return style.posBottom;
      case 'left':
        return style.posLeft;
      default:
        return style.posTop;
    }
  }

  render() {
    return (<Link to={this.getNavPanel(this.props.url, this.props.position)[0]} className={`${this.getNavPanel(this.props.url)[1]} ${this.getPosition()}`} />);
  }
}

navButton.propTypes = {
  addPanelUrl: PropTypes.string,
  url: PropTypes.string,
  position: PropTypes.string,
};

navButton.defaultProps = {
  addPanelUrl: '/panel/add',
  url: 'goto-top',
  position: 'Right',
};
