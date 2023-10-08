import React from 'react';
import './App.css';
import Component from './components/Component';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';


function App() {
  //console.log("App.js:", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
