/* eslint max-len: [2, 500, 4] */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import StoryForm from '../form';
import StoryContainer from '../../../../containers/story';
import { saveStory } from '../../../../actions/story';

class AcitivityAdd extends Component {

  constructor(args) {
    super(args);
    this.actionHandler = this.actionHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { userId, lastUpdated } = nextProps;
    if (lastUpdated) {
      browserHistory.push(`/user/${userId}/story?success`);
    }
  }

  actionHandler(userId, data) {
    const { dispatch } = this.props;
    dispatch(saveStory(userId, data));
  }

  render() {
    const { params } = this.props;
    return (<div className="container-fluid">
      <StoryForm action={this.actionHandler} userId={params.userId} />
    </div>);
  }
}

AcitivityAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.shape({}).isRequired,
  lastUpdated: PropTypes.number,
  userId: PropTypes.string,
};

AcitivityAdd.defaultProps = {
  lastUpdated: null,
  userId: null,
};

export default StoryContainer(AcitivityAdd);
