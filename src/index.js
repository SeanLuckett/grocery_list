import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import {createStore} from 'redux';
import {groceryListApp} from "./reducers";

import registerServiceWorker from './registerServiceWorker';

const mockGroceries = [{
  id: 1,
  name: 'bananas',
  cost: null,
  category: null,
}];

let store = createStore(groceryListApp, {
  groceryList: mockGroceries,
});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
