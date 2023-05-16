import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks/products-store';
import configureCounterStore from './hooks/counter-store';
//import ProductsProvider from './context/product-context';
//import productReducer from './store/reducers/products';
/*
const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
  
);*/
configureProductsStore();
configureCounterStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  
      <BrowserRouter>
      <App />
    </BrowserRouter>
  
  
);
