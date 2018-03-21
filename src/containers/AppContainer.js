import {connect} from 'react-redux';
import App from '../components/App';
import {deletePurchased} from "../actions";

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItems: () => {
      dispatch(deletePurchased())
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;