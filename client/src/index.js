import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import * as serviceWorker from './serviceWorker';
import rootReducer from './store/rootReducer';

import './styles.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
