import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'
import GroceryListContainer from '../containers/GroceryListContainer';
import AddItemContainer from '../containers/AddItemContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Grocery List" showMenuIconButton={false}/>

        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label="New item"/>
          </ToolbarGroup>
        </Toolbar>
        <AddItemContainer/>
        <GroceryListContainer/>
      </div>
    );
  }
}

export default App;
