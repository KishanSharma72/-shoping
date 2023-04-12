import React from 'react'
import {useNavigate} from 'react-router-dom';



function CartButton(props) {
    const navigation = useNavigate();

    const contactNavigation = (e) => {
      navigation('/shoping/cart');
    }

    if(props.productcount > 0){

        return (
            <>
                <button className="btn text-danger" onClick={contactNavigation}> Go <i className='fa-solid fa-cart-shopping'></i> Cart </button>

            </>
        )
    }
    else{
        return (
        <>
            <i onClick={()=>{props.postive(props.index)}} className="btn btn-primary fa-solid fa-cart-plus"></i>
        </>
        )
    }
}

export default CartButton
