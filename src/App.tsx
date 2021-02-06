import React from 'react';
import { Provider } from 'react-redux'
import Usuario from './Components/Usuario'
import Todos from './Components/Todos'
import './App.css';
import { store } from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Usuario />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
