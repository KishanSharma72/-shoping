import React  from 'react'
import MapProduct from './MapProduct'
import "./ProductList.css"

import ProductLoading from './ProductLoading';



function ApiProduct(props) {
    
    if(props.loading){
        return (<>
        <section id="portfolio" className="section">
        <div  className='container'>
        <div className='text-center my-5 h1'>Product List</div>
            <div className="container_custom">
            <ProductLoading /> 
            </div>
        
        </div>
        </section>
        </>
        )
    }
  return (
    <>
    <section id="portfolio" className="section">
        <div  className='container'>
        <div className='text-center my-5 h1'>Product List</div>
            <div className="container_custom">
                <MapProduct value={props.value} postive={props.postive} negative={props.negative}/>        
            </div>
        
        </div>
        </section>
    </>
  )
}

export default ApiProduct
