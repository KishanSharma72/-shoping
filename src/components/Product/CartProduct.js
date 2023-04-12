import React from 'react'
import "./cart.css"



function CartProduct(props) {
    // console.log(props)
  return (
    <>
        <div className="Cart-Items_cust my-4">
            <div className="image-box_cust">
                <img src={props.value.image} alt='productimage' style={{ height:"50px", width:"50px" }} />
            </div>
            <div className="about_cust">
                <div>{props.value.title.substring(1, 30)}..</div>
            </div>
            <div className="counter_cust">
                <div className="btn_cust" onClick={()=>{props.postive(props.index)}}>+</div>
                <div className="count_cust">{props.value.productcount}</div>
                <div className="btn_cust" onClick={()=>{props.negative(props.index)}}>-</div>
            </div>
            <div className="prices_cust">
                <div className="title_cust">${(props.value.productcount * props.value.price).toFixed(2)}</div>
            </div>
        </div>     
    </>
  )

}

export default CartProduct
