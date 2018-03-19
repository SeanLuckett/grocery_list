import React from 'react';
import PropType from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const GroceryList = ({ groceryList }) => {
  const list = groceryList.map(item => (
    <ListItem primaryText={item.name} key={item.id}/>
  ));

  return (
    <Paper>
      <List style={{textAlign: "center"}}>
        {list}
      </List>
    </Paper>
  );
};

GroceryList.propTypes = {
  groceryList: PropType.array.isRequired,
};

export default GroceryList