// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './user/component/heder/Header';
import { Route, Routes } from 'react-router';
import Home from './user/container/home/Home';
import Product from './user/container/product/Product';
import Contect from './user/container/contect/Contect';



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exect path='/' element={<Home />}/>
        <Route exect path='/Product' element={<Product />}/>
        <Route exect path='/Contect' element={<Contect />}/>
      </Routes>
    </>


  );

}

export default App;
