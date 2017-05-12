import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { panelHelper } = state;
  const {
    isProcessing,
    lastUpdated,
    groupId,
    data: panel,
  } = panelHelper || {
    isProcessing: true,
    data: {},
  };

  return {
    isProcessing,
    lastUpdated,
    panel,
    groupId,
  };
};

export default connect(mapStateToProps);
