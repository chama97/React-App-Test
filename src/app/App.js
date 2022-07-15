import React from "react";
import HomePage from "../page/home"
import Login from "../page/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../page/session/NotFound";
import FlexBoxLayout from "../page/Layouts/FlexBox";
import ItemPage from "../page/Layouts/Item"
import Posts from "../../src/page/Posts";

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='posts' element={<Posts/>}/>
        <Route path='item' element={<ItemPage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='flex-layout' element={<FlexBoxLayout/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
