import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { selectedUser, panelsByUser } = state;
  const {
    isFetching,
    lastUpdated,
    data: panels,
  } = panelsByUser[selectedUser] || {
    isFetching: true,
    data: [],
  };

  return {
    selectedUser,
    isFetching,
    lastUpdated,
    panels,
  };
};

export default connect(mapStateToProps);
