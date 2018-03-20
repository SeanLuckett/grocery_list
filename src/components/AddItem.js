import React from 'react';
import PropType from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const AddItem = ({ onSubmit, visible }) => {
  const formVisibility = visible ? 'contents' : 'none';

  return (
    <Paper style={{ textAlign: "center", display: formVisibility }}>
      <form className="addItemForm"
            onSubmit={onSubmit}>
        <TextField name="name"
                   hintText="Item name"
                   floatingLabelText="Add new item"/>
        <FlatButton label="Add"
                    secondary={true}
                    type="submit"/>
      </form>
    </Paper>
  )
};

AddItem.propTypes = {
  onSubmit: PropType.func.isRequired,
};

export default AddItem