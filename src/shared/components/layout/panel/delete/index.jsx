import React from 'react';

const style = require('./style.scss');

export default function panelNavigationButton() {
  return (<div className={`${style.arrow} ${style.arrowUp}`} />);
}
