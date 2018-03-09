import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import {createStore} from 'redux';
import {groceryListApp} from "./reducers";

import registerServiceWorker from './registerServiceWorker';

let store = createStore(groceryListApp);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
