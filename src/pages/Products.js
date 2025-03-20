import React from 'react';
import productImg from "../assets/images/products1.jpg"
import productImg2 from "../assets/images/platinum-program.png"


function Products() {
  return (
    <section className="our-products py-5">
      <div className="container">
        {/* Our Products Heading */}
        <h2 className="fw-bold mb-4">Our Products</h2>
        <p className="text-white">
         <div className="col-lg-8">
         Gain access to powerful trading tools and resources that will help you make
          informed trading decisions. Our platform is designed to help traders of all levels,
          whether you're a beginner or an experienced trader.
         </div>
        </p>
        <p>
          Already have an account? <a href="/login" className="text-primary fw-bold">Log in here</a>
        </p>

        {/* Premium Programs Section */}
        <h3 className="fw-bold my-lg-4 my-2">Premium Programs</h3>
        <div className="row">
          {/* ValourWealth Terminal Card */}
          <div className="col-md-4">
            <div className="card products_card shadow-sm border-0 rounded-3 premium-product">
              <img src={productImg} className="card-img-top" alt="ValourWealth Terminal" />
              <div className="card-body">
                <h5 className="card-title fw-bold text-black text-left">ValourWealth Terminal</h5>
                <p className="text-muted">Premium Programs</p>
              </div>
            </div>
          </div>

          {/* Platinum Program Card */}
          <div className="col-md-4">
            <div className="card products_card shadow-sm border-0 rounded-3 premium-product">
              <img src={productImg2} className="card-img-top" alt="Platinum Program" />
              <div className="card-body">
                <h5 className="card-title fw-bold text-black text-left">The Platinum Program</h5>
                <p className="text-muted">Premium Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
