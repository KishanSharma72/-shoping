import React ,{useEffect, useState} from 'react'
import Home from './components/Main/Home.js';
// import Contectus from './components/Main/Contectus.js'

import {Route, Routes} from "react-router-dom";
import MainElement from './components/Main/MainElement';
import Error from './components/Main/Error';
import ApiProduct from './components/Product/ApiProduct';
import MainPage from './components/home/MainPage';
import Cart from './components/Product/Cart';

function App() {
  
  const [value, setvalue] = useState([]);
  const [loading, setloading] = useState(true);

    useEffect(()=>{
        getproduct();
    },[])

    const getproduct = async ()=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()  
            setvalue(data);
            setloading(false);
        }catch(error){
            console.log(error);
            // setloading(false);

        }
    }

    


    const postive = (item) =>{
        // console.log(item)
        const newvalue = [...value]
        if(!newvalue[item].productcount){
            newvalue[item].productcount = 0
        }
        newvalue[item].productcount++
        setvalue(newvalue);
    }

    const negative = (item)=>{
        const newvalue = [...value]
        if(newvalue[item].productcount > 0){
            newvalue[item].productcount--
        }
        setvalue(newvalue);
    }
  return (
    <>
    <Routes >
        <Route path='/shoping' element = {<MainElement/>} >
          <Route index element={<MainPage/>} />
          <Route path='/shoping/about' element={<Home/>} />
          <Route path='/shoping/portfolio' element = {<ApiProduct value={value} postive={postive} negative={negative} loading={loading} />} />
          {/* <Route path='/shoping/contact-us' element = {<Contectus/>} /> */}
          <Route path='/shoping/cart' element = {<Cart value={value} postive={postive} negative={negative}/>} />
          <Route path='*' element = {<Error/>} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
