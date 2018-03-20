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
    }
  }

  toggleAddItem = () => {
    this.setState({addItemFormVisible: !this.state.addItemFormVisible})
  };

  render() {
    return (
      <div className="App">
        <AppBar title="Grocery List" showMenuIconButton={false}/>

        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label="Add items"
                          onClick={this.toggleAddItem}/>
          </ToolbarGroup>
        </Toolbar>
        <AddItemContainer visible={this.state.addItemFormVisible}/>
        <GroceryListContainer/>
      </div>
    );
  }
}

export default App;
