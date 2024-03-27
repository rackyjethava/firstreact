// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './user/component/heder/Header';
import { Route, Routes } from 'react-router';
import Home from './user/container/home/Home';
import Product from './user/container/product/Product';
import Contect from './user/container/contect/Contect';
import Counter from './user/container/counter/Counter';
import { Provider } from 'react-redux';
import { configstore } from './redux/store';





function App() {
  const store = configstore()
  return (
    <>
      <Provider store={store} >
        <Counter />
      </Provider>
    </>
  );

}

export default App;
