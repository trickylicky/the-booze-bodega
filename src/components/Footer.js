import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='sections'>
        <div>
        <h1> Booze Bodega </h1> <br />
        <p>Accept what life offers you and drink from every cup. <br /> All liquors should be tasted; some should only be sipped, <br /> but  with others, drink the whole bottle. </p>
        </div>
        <section>
            <ul>
                <h3>INFORMATION</h3>
                <li>Features</li>
                <li>News Blog</li>
                <li>Terms & conditions</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
        </section>
        <section>
            <ul>
                <h3>YOUR ACCOUNT</h3>
                <li>Your Account</li>
                <li>Personal Information</li>
                <li>Order Now</li>
                <li>Order History</li>
            </ul>
        </section>
        <section>
            <ul>
                <h3>OUR OFFERS</h3>
                <li>New Products</li>
                <li>Top Sales</li>
                <li>Discounts</li>
                <li>Delivery</li>
            </ul>
        </section>
        <section>
            <ul>
                <h3>CONTACTS</h3>
                <li>Contact Support</li>
                <li> TEL: +25411001010</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
            </ul>
        </section>
    </div> <hr />
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <p> &copy; 2022 BoozeBodega, Kenya. All rights reserved.</p>
        <p>
            <i className="fa-brands fa-facebook"></i> &nbsp; 
            <i className="fa-brands fa-instagram"></i> &nbsp;
            <i className="fa-brands fa-twitter"></i> &nbsp;
            <i className="fa-brands fa-linkedin"></i>
        </p>
    </div>
    
</footer>
  )
}

export default Footer
