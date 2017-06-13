import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GaUtil from '../utils/gaUtil';

injectTapEventPlugin();

export default class AppHandler extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: context.data ? context.data : window.data,
    };
    this.getChildren = this.getChildren.bind(this);
  }

  componentDidMount() {
    GaUtil.init();
  }

  getChildren() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { data: this.state.data }),
    );
  }

  render() {
    return (<div>
      {this.getChildren()}
    </div>);
  }
}

AppHandler.propTypes = {
  children: PropTypes.shape({}),
};

AppHandler.contextTypes = {
  data: PropTypes.object,
};

AppHandler.defaultProps = {
  children: {},
};
