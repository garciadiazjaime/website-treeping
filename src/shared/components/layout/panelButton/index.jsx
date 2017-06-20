import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { getUrl, getClassName } from './util';

export default function PanelButton({ data, position }) {
  const url = getUrl(data, position);
  const className = getClassName(data, position);
  return (<Link to={url} className={className} />);
}

PanelButton.propTypes = {
  data: PropTypes.shape({}),
  position: PropTypes.string,
};

PanelButton.defaultProps = {
  data: {},
  position: '',
};
