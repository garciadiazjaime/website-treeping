import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { storyHelper } = state;
  const {
    isProcessing,
    lastUpdated,
    groupId,
    data: story,
  } = storyHelper || {
    isProcessing: true,
    data: {},
  };

  return {
    isProcessing,
    lastUpdated,
    story,
    groupId,
  };
};

export default connect(mapStateToProps);
