import React from 'react';
import PropType from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const AddItem = ({ onSubmit, visible }) => {
  const formVisibility = visible ? 'contents' : 'none';

  return (
    <Paper style={{ display: formVisibility }}>
      <form className="addItemForm"
            style={{paddingLeft: '5%'}}
            onSubmit={onSubmit}>
        <TextField name="name"
                   hintText="Item name"
                   floatingLabelText="Add new item"/>
        <FlatButton label="Add"
                    secondary={true}
                    type="submit"/>
        <br/>
        <TextField name="category"
                   hintText="Category name"
                   floatingLabelText="Add optional category"/>

      </form>
    </Paper>
  )
};

AddItem.propTypes = {
  onSubmit: PropType.func.isRequired,
};

export default AddItem