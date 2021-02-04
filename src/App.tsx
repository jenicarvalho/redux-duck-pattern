import React from 'react';
import { Provider } from 'react-redux'
import Usuarios from './Usuarios'
import Post from './Post'
import './App.css';
import { store } from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Usuarios />
        <Post />
      </Provider>
    </div>
  );
}

export default App;
