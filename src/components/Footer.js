import React from "react"
import { Link } from "react-router-dom"
const year = new Date().getFullYear()
const Footer = () => <footer className="page-footer font-small blue pt-4 bg-dark text-white pt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Category</h5>
                <ul className="list-unstyled">
                    <li><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
                    <li><Link to="/order" style={{textDecoration:"none",color:"white"}}>Order</Link></li>
                    <li><Link to="/cart" style={{textDecoration:"none",color:"white"}}>Cart</Link></li>
                    <li><Link to="/" style={{textDecoration:"none",color:"white"}}>Local For Vocal</Link></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Customer Service</h5>
                <ul className="list-unstyled">
                    <li><Link style={{textDecoration:"none",color:"white"}}>Privacy Policy</Link></li>
                    <li><Link to="/about" style={{textDecoration:"none",color:"white"}}>About</Link></li>
                    <li><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact Us</Link></li>
                </ul>
            </div>

            <div className="col-md-6 mt-md-0 mt-3">
                <div className="h-30 w-30 px-4">
                <img src="https://ecommerce-sk.vercel.app/pay.png" alt="img" style={{width:300,height:150}} />
                </div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© {year}. All Rights Reserved by AR Store.
    </div>

</footer>

export default Footer
