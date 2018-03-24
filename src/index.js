import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import {createStore} from 'redux';
import {groceryListApp} from "./reducers";
import AppContainer from './containers/AppContainer';

import registerServiceWorker from './registerServiceWorker';

const mockGroceries = [
  {
    id: 1,
    name: 'bananas',
    cost: null,
    category: 'Produce',
    purchased: false,
  }, {
    id: 2,
    name: 'helicopter',
    cost: null,
    category: null,
    purchased: false,
  }
];

let store = createStore(groceryListApp, {
  groceryList: mockGroceries,
});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
