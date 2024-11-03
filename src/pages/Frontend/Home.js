import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../setions/Filter';
import CartSection from '../setions/CartSection';
import Testimonial from '../setions/Testimonial';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <main>
            {/* hero section */}
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col text-center text-md-start">
                            <h2 className='text-black fw-bold'>WellCome To</h2>
                            <h1 className='text-black fw-bold'>AR Restaurant</h1>
                            <h1 className='text-black fw-bold'>Pizza Deals Upto <span className='text-primary'>50%</span> on Order</h1>
                            <Link to="/menuItems" className='btn btn-lg btn-outline-dark mt-3'>Check Menu</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className="second-section">
                <div className="container my-4">
                    <div className="row">
                        <div className="col">
                            <div className="card p-3">
                                <h3 className="my-2">Search Your Favourite Food</h3>
                                <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third section  */}
            <CartSection selectedCategory={selectedCategory} />
            {/* forth section  */}
            <div className="my-5">
                <Testimonial />
            </div>
        </main>
    );
}
