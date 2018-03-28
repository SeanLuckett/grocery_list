import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'
import GroceryListContainer from '../containers/GroceryListContainer';
import AddItemContainer from '../containers/AddItemContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      addItemFormVisible: false,
      itemsToDelete: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const anyCrossedOffItems = this._checkForDeletedItems(nextProps.groceryList);
    this.setState({
      itemsToDelete: anyCrossedOffItems,
    })
  }

  _checkForDeletedItems(list) {
    const crossedOff = list.filter(item => item.purchased);
    return crossedOff.length > 0;
  }

  toggleAddItem = () => {
    this.setState({addItemFormVisible: !this.state.addItemFormVisible})
  };

  render() {
    const {deleteItems} = this.props;

    return (
      <div className="App">
        <div className="code-link">
          <a href="https://github.com/SeanLuckett/grocery_list" target="_blank">
            See the code
          </a>
        </div>

        <AppBar title="Grocery List" showMenuIconButton={false}/>

        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label="Add items"
                          onClick={this.toggleAddItem}/>
            <RaisedButton label="Delete crossed-off items"
                          onClick={() => {deleteItems()}}
                          disabled={!this.state.itemsToDelete}/>
          </ToolbarGroup>
        </Toolbar>
        <AddItemContainer visible={this.state.addItemFormVisible}/>
        <GroceryListContainer groceryList={this.props.groceryList}/>
      </div>
    );
  }
}

export default App;
