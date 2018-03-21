import React, {Component} from 'react';
import PropType from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import ToggleCheckbox from 'material-ui/svg-icons/toggle/check-box';
import Paper from 'material-ui/Paper';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: this.props.groceryList,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groceryList: this.sortGroceryList(nextProps.groceryList),
    })
  }

  sortGroceryList(list) {
    const purchasedItems = list.filter(item => item.purchased);
    const unpurchasedItems = list.filter(item => !item.purchased);
    return unpurchasedItems.concat(purchasedItems);
  }

  render() {
    const { togglePurchased } = this.props;
    const { groceryList } = this.state;

    const list = groceryList.map(item => {
      const crossedOut = item.purchased ? 'line-through' : 'none';
      const crossedOutIcon = item.purchased? <ToggleCheckbox/> : null;

      return (
        <ListItem primaryText={item.name}
                  key={item.id}
                  onClick={() => {
                    togglePurchased(item.id)
                  }}
                  leftIcon={crossedOutIcon}
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
  }
}

GroceryList.propTypes = {
  groceryList: PropType.array.isRequired,
};

export default GroceryList