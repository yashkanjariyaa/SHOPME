import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import ProductOne from './product-one';
import ProductTwo from './product-two';
import ProductThree from './product-three';
import About from './about';
import Contacts from './contacts';
const AppRouter = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contacts' element={<Contacts/>}/>
          <Route exact path='/productsOne' element={<ProductOne/>}/>
          <Route exact path='/productsTwo' element={<ProductTwo/>}/>
          <Route exact path='/productsThree' element={<ProductThree/>}/>
        </Routes>
      </Router>
    </div>
      
  )
}

export default AppRouter;
