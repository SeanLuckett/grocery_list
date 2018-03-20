import React from 'react';
import PropType from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const AddItem = ({onClick}) => {
    return (
      <Paper style={{ textAlign: "center" }}>
        <form className="addItemForm"
              onSubmit={onClick}>
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
  onClick: PropType.func.isRequired,
};

export default AddItem