import React from "react";
import CartProduct from "./CartProduct";
import {useNavigate} from 'react-router-dom'


function Cart(props) {    
    let cartdata = true;
    let price = 0
    let products = 0;



    const navigation = useNavigate();
    const contactNavigation = (e) => {
      navigation('/shoping/portfolio');
    }
    return (
      <>
        <section className="section mt-3">
          <div className="container h1">Cart Page</div>
          <div className="container mt-5">
            <div className="CartContainer p-4">
            
              {props.value.map((item, index) => {
                if(props.value[index].productcount > 0){
                  cartdata = false;
                  price += (props.value[index].productcount * props.value[index].price)
                  products += 1
                  return ( 
                    <CartProduct value={props.value[index]} key={index} postive={props.postive} negative={props.negative} index={index} />
                  );
                }
                else{
                  return null;
                }
              })
              
              }
              {cartdata?<>
              <div className="Cart-Items_cust my-2">

                Your cart is empty!
                <br />
                Add items to it now.
                <div className="buttons pt-3">
                  <button className="btn btn-danger rounded" onClick={contactNavigation}>shop Now</button>

                </div> 
              </div>
            </>:""}
            </div>
            {cartdata?"":<>
            <hr />
            <div className="checkout_cust">
              <div className="total_cust">
                <div>
                  <div className="Subtotal_cust">Sub-Total</div>
                  <div className="items_cust">{products}items</div>
                </div>
                <div className="total-amount_cust">${price.toFixed(2)}</div>
              </div>
              <button className="button_cus">Checkout</button>
            </div>
            </>
            }
          </div>
        </section>
      </>
    );

}

export default Cart;
