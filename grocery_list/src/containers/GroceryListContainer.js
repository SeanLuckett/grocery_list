import {connect} from 'react-redux';
import GroceryList from '../components/GroceryList'

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceryList,
  }
};

const GroceryListContainer = connect(
  mapStateToProps
)(GroceryList);

export default GroceryListContainer