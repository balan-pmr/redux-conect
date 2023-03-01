import Basket from './basket';
import AddProduct from './addProduct';
import React from 'react'
import store from './store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}> 
      <Basket/>
      <AddProduct/>
    </Provider>
  );
}

export default App;
