import React from 'react'

function MainPage() {
    const home_image = "https://res.cloudinary.com/anmoldev/image/upload/v1674559849/shoping.com/bruno-kelzer-LvySG1hvuzI-unsplash-removebg-preview_u2fhq3.png";
    const image_home = "https://res.cloudinary.com/anmoldev/image/upload/v1674560139/shoping.com/andy-hermawan-uFdCDgnoNVI-unsplash_ousz1g.jpg"
    return (
    <>
      
        <header className="header">
            <div className="container">
            <div className="infos">
                <h6 className="title">Shopping.com</h6>
                <p>Lowest Prices Best Quality Shopping</p>
                <div className="buttons pt-3">
                    <a href='/' className="btn btn-primary rounded">Buy Product</a>
                </div>      
            </div>              
            <div className="img-holder">
                <img src={home_image} alt={"HomeImage"} />
            </div>      
            </div>  
            <div className="widget">
            <div className="widget-item">
                <p>Free Delivery</p>
            </div>
            <div className="widget-item">
                <p>Cash on Delivery</p>
            </div>
            <div className="widget-item">
                <p>Easy Returns</p>
            </div>
            </div>
        </header>

        <section className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img src={image_home} alt={"AvatarImage"} className="img-thumbnail mb-4" />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Shopping.com</h6>
              <p className="subtitle">Lowest Prices Best Quality Shopping</p>
              <p>Lowest Prices Best Quality Shopping</p>
              <button className="btn btn-primary rounded mt-3">Buy Product</button>                   
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default MainPage
