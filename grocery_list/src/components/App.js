import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'
import GroceryListContainer from '../containers/GroceryListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Grocery List" showMenuIconButton={false}/>

        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label="Add item"/>
          </ToolbarGroup>
        </Toolbar>
        <GroceryListContainer/>
      </div>
    );
  }
}

export default App;
