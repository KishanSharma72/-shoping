import React from 'react'
import ProductList from './productList'
function MapProduct(props) {
    // console.log(props)
  return (
    props.value.map((item,i)=>{
        return <ProductList value={item} key={i} index={i} postive={props.postive} negative={props.negative}/>
    })
  )
}

export default MapProduct
