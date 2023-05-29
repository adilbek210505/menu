import React from 'react';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Admin from "./Components/Admin";
import Order from "./Components/Orders";
import Menu from "./Components/Menu";

const App = () => {
  return (
      <div className="containers">
          <Header/>
          <Routes>
              <Route path={"/"} element={<Admin/>}/>
              <Route path={"/order"} element={<Order/>}/>
              <Route path={"/menu"} element={<Menu/>}/>
          </Routes>
      </div>
  );
};

export default App;
