import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { selectedUser, storiesByUser } = state;
  const {
    isFetching,
    lastUpdated,
    data: stories,
  } = storiesByUser[selectedUser] || {
    isFetching: true,
    data: [],
  };

  return {
    selectedUser,
    isFetching,
    lastUpdated,
    stories,
  };
};

export default connect(mapStateToProps);
