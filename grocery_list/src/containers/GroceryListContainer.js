import {connect} from 'react-redux';
import {toggleItemPurchase} from "../actions";
import GroceryList from '../components/GroceryList'

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePurchased: (id) => {
      dispatch(toggleItemPurchase(id));
    }
  };
};

const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

export default GroceryListContainer