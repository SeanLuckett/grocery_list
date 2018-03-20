import {connect} from 'react-redux';
import serialize from 'form-serialize';
import AddItem from '../components/AddItem';
import {addItem} from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      event.preventDefault();
      const form = event.target;
      const data = serialize(form, { hash: true });

      if (data['name'])
        dispatch(addItem(data));

      form.reset();
    }
  };
};

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItem);

export default AddItemContainer