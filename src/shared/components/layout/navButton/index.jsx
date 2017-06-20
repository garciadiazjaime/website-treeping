/* eslint max-len: [2, 500, 4] */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');

export default class navButton extends Component {

  constructor(props) {
    super(props);
    this.url = this.getUrl(this.props.data);
    this.class = this.getClass(this.props.data);
  }

  getUrl(data) {
    let url;
    if (data.url) {
      url = data.url;
    } else {
      url = this.props.addPanelUrl + data.position;
    }

    return url;
  }

  getClass(data) {
    let className;
    if (data.url) {
      className = `${style.arrow} ${this.getPosition(data)}`;
    } else {
      className = `${style.newPanel} ${this.getPosition(data)}`;
    }

    return className;
  }

  getPosition(data) {
    let posStyle = this.addPanelUrl;
    try {
      switch (data.position) {
        case 'top':
          posStyle = style.posTop;
          break;
        case 'right':
          posStyle = style.posRight;
          break;
        case 'bottom':
          posStyle = style.posBottom;
          break;
        case 'left':
          posStyle = style.posLeft;
          break;
        default:
          posStyle = style.navError;
      }
    } catch (err) {
      posStyle = style.navError;
    }
    return posStyle;
  }

  render() {
    return (<Link to={this.url} className={this.class} />);
  }
}

navButton.propTypes = {
  addPanelUrl: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string,
  }),
};

navButton.defaultProps = {
  addPanelUrl: '/panel/add',
  data: null,
};
