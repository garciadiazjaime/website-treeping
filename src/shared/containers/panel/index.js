import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { panelHelper } = state;
  const {
    isProcessing,
    entitySaved,
    data: panel,
  } = panelHelper || {
    entitySaved: false,
    data: {},
  };

  return {
    isProcessing,
    entitySaved,
    panel,
  };
};

export default connect(mapStateToProps);
