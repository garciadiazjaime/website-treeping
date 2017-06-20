/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import style from './style.scss';

export function getUrl(data, position) {
  const child = data.children[position];
  if (child && child._id) {
    return `/panel/${child._id}`;
  }
  return `/panel/${data._id}/${position}/add`;
}

export function getClassName(data, position) {
  const child = data.children[position];
  const iconClassName = child && child._id ? style.arrow : style.newPanel;
  const positionClassName = style[position] || style.navError;
  return `${iconClassName} ${positionClassName}`;
}
