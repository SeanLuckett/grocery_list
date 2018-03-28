import React, {Component} from 'react';
import PropType from 'prop-types';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: this.props.groceryList,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      groceryList: nextProps.groceryList,
    })
  }

  _organizeListByCategories() {
    const unsortedList = this.state.groceryList;
    let sortedList = {
      "Uncategorized": [],
      "Crossed Out": [],
    };
    let categories = Object.keys(sortedList);

    unsortedList.forEach(item => {
      if (item.purchased === true) {
        sortedList['Crossed Out'].push(item);
      } else if (categories.includes(item.category)) {
        sortedList[item.category].push(item)
      } else if (item.category && !categories.includes(item.category)) {
        sortedList[item.category] = [item];
        categories.push(item.category);
      } else {
        sortedList['Uncategorized'].push(item);
      }
    });

    return sortedList;
  }

  _sortedCategories(catListObj) {
    let categories = Object.keys(catListObj);
    categories = categories.filter(cat =>
      (cat !== 'Uncategorized' && cat !== 'Crossed Out')
    );
    categories.push('Uncategorized');
    categories.push('Crossed Out');

    return categories;
  }
  
  render() {
    const { togglePurchased } = this.props;
    const categorizedList = this._organizeListByCategories();
    const categories = this._sortedCategories(categorizedList);
    let renderedList = [];

    categories.forEach(category => {

      renderedList.push(
        <Subheader className='list-category' key={category}>{category}</Subheader>
      );

      const items = categorizedList[category].map(item => {
        const crossedOut = item.purchased ? 'line-through' : 'none';

        return (
          <ListItem primaryText={item.name}
                    key={item.id}
                    onClick={() => {
                      togglePurchased(item.id)
                    }}
                    style={{
                      textDecoration: crossedOut,
                      paddingLeft: '20px'
                    }}/>
        );
      });

      renderedList.push(items);
    });

    return (
      <Paper>
        <List>
          {renderedList}
        </List>
      </Paper>
    );
  }
}

GroceryList.propTypes = {
  groceryList: PropType.array.isRequired,
};

export default GroceryList