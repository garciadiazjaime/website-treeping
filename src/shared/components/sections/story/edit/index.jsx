/* eslint max-len: [2, 500, 4] */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import StoryForm from '../form';
import StoryContainer from '../../../../containers/story';
import { getStory, updateStory } from '../../../../actions/story';

class StoryEdit extends Component {

  constructor(args) {
    super(args);
    this.actionHandler = this.actionHandler.bind(this);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getStory(params.storyId));
  }

  componentWillReceiveProps(nextProps) {
    const { userId, lastUpdated } = nextProps;
    if (lastUpdated) {
      browserHistory.push(`/user/${userId}/story?success`);
    }
  }

  actionHandler(storyId, data) {
    const { dispatch } = this.props;
    dispatch(updateStory(storyId, data));
  }

  render() {
    const { story, lastUpdated } = this.props;
    return story && story.userId ? 'Loading' : (<div className="container-fluid">
      <StoryForm action={this.actionHandler} userId={story.userId} story={story} lastUpdated={lastUpdated} />
    </div>);
  }
}

StoryEdit.propTypes = {
  params: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  story: PropTypes.shape({}),
  lastUpdated: PropTypes.number,
  userId: PropTypes.string,
};

StoryEdit.defaultProps = {
  story: {},
  lastUpdated: null,
  userId: null,
};


export default StoryContainer(StoryEdit);
