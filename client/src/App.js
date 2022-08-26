import React from 'react';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/login/login';
import { Temp1 } from './components/template/template1';
import { Temp2 } from './components/template2/template2';
import { Temp3 } from './components/template3/template3';
import { Signin } from './components/signin/signin';
import { Mtemplate } from './components/maintemplate/maintemplate';
import { Form } from './components/form/form';
import { Home } from './components/homepage/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/temp1" element={<Temp1/>}></Route>
          <Route path="/temp2" element={<Temp2/>}></Route>
          <Route path="/temp3" element={<Temp3/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          {/* <Route path="/temp5" element={<Mtemplate/>}></Route> */}
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
