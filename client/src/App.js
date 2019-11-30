import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/store';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

const store = configureStore({});

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Header/>
        <Main/>
      </div>
    </ReduxProvider>
  );
}

export default App;
