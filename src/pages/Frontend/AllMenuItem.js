import React, { useEffect, useState, useContext } from 'react';
import { Image, Spin } from 'antd';
import { useCart } from '../../contexts/CartContext';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { firestore } from '../../config/Firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../../contexts/ModeContext';

export default function AllMenuItem({ selectedCategory }) {
    const navigate = useNavigate();
    const { dispatch, currentUser } = useCart();
    const { searchKey, filterPrice } = useContext(ModeContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(firestore, "menu"));
            const menuItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(menuItems);
        } catch (error) {
            console.error("Error fetching Items: ", error);
            toast.error("Failed to load Items.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = async (item) => {
        if (!currentUser) {
            toast.error("You must be logged in to add items to the cart.");
            return;
        }

        dispatch({ type: "ADD_TO_CART", payload: item });
        toast.success("Item has been successfully added to the cart");

        try {
            await setDoc(doc(firestore, "carts", item.id), {
                id: item.id,
                title: item.title,
                price: item.price,
                url: item.url,
                quantity: 1,
                uid: currentUser.uid
            });
            console.log("Item added to Firestore");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleReview = (item) => {
        localStorage.setItem("review", JSON.stringify(item));
        navigate("/menuItemInfo/1");
    };

    const filteredData = data.filter(item => {
        const matchesCategory = selectedCategory ? item.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchesSearchKey = searchKey ? item.title.toLowerCase().includes(searchKey.toLowerCase()) : true;

        // Price filtering
        const priceRange = filterPrice ? filterPrice.split('-') : [];
        const priceCondition = priceRange.length === 2
            ? item.price >= Number(priceRange[0]) && item.price <= Number(priceRange[1])
            : filterPrice === '10000+' ? item.price > 10000 : true;

        return matchesCategory && matchesSearchKey && priceCondition;
    });

    return (
        <div className="container my-3">
            <div className="row">
                <h1 className='text-center fw-bold my-2'>Our Special Food</h1>
                
                {loading ? (
                    <div className="text-center">
                        <Spin size="large" />
                    </div>
                ) : (
                    filteredData.map((item) => (
                        <div className="col-12 col-md-6 col-lg-3 mt-4" key={item.id}>
                            <div className="card card-responsive p-2" onClick={() => handleReview(item)} style={{height:"500px"}}>
                                <Image src={item.url} alt={item.title} className='img-fluid custom-image' preview={false} style={{ height: 200 }} />
                                <p className="mt-2 text-grey">AR Restaurant</p>
                                <h4 className="mt-1">{item.title}</h4>
                                <h4 className="mt-1">{item.category}</h4>
                                <p className='text-success fs-2'>${item.price}</p>
                                <button 
                                    className="btn btn-outline-success btn-lg rounded-4 my-2" 
                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }} 
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}




