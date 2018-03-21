import {connect} from 'react-redux';
import {toggleItemPurchase} from "../actions";
import GroceryList from '../components/GroceryList'

const mapDispatchToProps = (dispatch) => {
  return {
    togglePurchased: (id) => {
      dispatch(toggleItemPurchase(id));
    }
  };
};

const GroceryListContainer = connect(
  null,
  mapDispatchToProps
)(GroceryList);

export default GroceryListContainer