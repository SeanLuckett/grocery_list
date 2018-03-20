import React from 'react';
import PropType from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const GroceryList = ({ groceryList, togglePurchased }) => {
  const list = groceryList.map(item => {
    const crossedOut = item.purchased ? 'line-through' : 'none';
    return (
      <ListItem primaryText={item.name}
                key={item.id}
                onClick={() => {
                  togglePurchased(item.id)
                }}
                style={{ textDecoration: crossedOut }}/>
    );
  });

  return (
    <Paper>
      <List style={{ textAlign: "center" }}>
        {list}
      </List>
    </Paper>
  );
};

GroceryList.propTypes = {
  groceryList: PropType.array.isRequired,
};

export default GroceryList