import { Component, PropTypes } from 'react';

export default class DataWrapper extends Component {

  getChildContext() {
    return {
      data: this.props.data,
    };
  }

  render() {
    return this.props.children;
  }
}

DataWrapper.propTypes = {
  data: PropTypes.shape({}),
  children: PropTypes.shape({}),
};

DataWrapper.childContextTypes = {
  data: PropTypes.object.isRequired,
};

DataWrapper.defaultProps = {
  data: {},
  children: null,
};
