import React from 'react'
import "./ProductList.css"

import CartButton from './CartButton'

function ProductList(props) {
    // console.log(props.value.id)
    // var buttons_val = document.getElementById('buttons')
  //   const [buttons, setbuttons] = useState(`<i className="fa-solid fa-cart-shopping"></i>`);
    
  //   // buttons_val.innerHTML = buttons
  //   useEffect((props)=>{
  //     console.log(props)
  //       // if(props.value.productcount > 0){
  //       //   setbuttons(`<button onClick={()=>{props.postive(props.index)}}>Postive</button>
  //       //   <button>{props.value.productcount ? props.value.productcount:"0"}</button>
  //       //   <button onClick={()=>{props.negative(props.index)}}>Negative</button>`)
  //       // }
  //       setbuttons("hello")
  //       console.log(props)
  // },[]);
  return (
    <>
      <div className="post">
        <div className="header_post">
          <img src={props.value.image} alt={props.value.title.substring(1, 50)} />
        </div>
        <div className="body_post">
          <div className="post_content">
            <h1>{props.value.title.substring(1, 50)}..</h1>
            <p>{props.value.description.substring(1, 120)}...</p>
            <div className="container_infos">
              <div className="postedBy">
                <span>Price</span>
                ${props.value.price}
                
              </div>
              <div className="container_tags">
                <span className="text-center">{props.value.productcount ? "Go To Cart":"Add To Cart"}</span>
                <div className="tags">
                  <ul>

                    <CartButton postive={props.postive} index={props.index}  negative={props.negative} productcount={props.value.productcount ? props.value.productcount:0} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
