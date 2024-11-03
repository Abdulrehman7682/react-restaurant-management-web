import React, { useEffect, useState } from 'react';
import { Flex, Rate, Image } from 'antd';
import { FaFacebookF, FaHeart, FaRegHeart, FaWhatsappSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../config/Firebase';
import { toast } from 'react-toastify';
import { useCart } from '../../contexts/CartContext';

export default function MenuItemInfo() {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { dispatch, currentUser } = useCart();
    const ItemReview = JSON.parse(localStorage.getItem("review"));
    const [value, setValue] = useState(4);
    // let user = JSON.parse(localStorage.getItem("user"))

    const handleAddToCart = async () => {
        dispatch({ type: "ADD_TO_CART", payload: ItemReview });
        toast.success("Item has been successfully added to cart");

        try {
            await setDoc(doc(firestore, "carts", ItemReview.id), {
                id: ItemReview.id,
                title: ItemReview.title,
                price: ItemReview.price,
                url: ItemReview.url,
                quantity: 1,
                uid: currentUser.uid
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleAddToWhishlist = async () => {
        try {
            await setDoc(doc(firestore, "wishlists", ItemReview.id), {
                id: ItemReview.id,
                title: ItemReview.title,
                price: ItemReview.price,
                url: ItemReview.url,
                uid: currentUser.uid
            });
            toast.success("Item has been successfully added to wishlist");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setValue(4);
    }, []);

    const toggleWishlist = () => {
        setIsWishlisted(prev => !prev);
    };

    return (
        <div className="container py-4">
            <div className="row info-card">
                <div className="col-12 col-md-6 col-lg-4 mx-1 mx-md-3">
                    <div className="card bg-white" style={{ border: "none" }}>
                        <Image src={ItemReview.url} alt='Product Image' style={{ height: 400, width: 400 }} />
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-lg-1 col-lg-6 mx-5">
                    <div className="card bg-white" style={{ border: "none" }}>
                        <h6 style={{ color: "grey" }}>AR Restaurant</h6>
                        <h1>{ItemReview.title}</h1>
                        <div className="d-flex fs-15">
                            <Flex gap="middle" vertical>
                                <Rate value={value} />
                            </Flex>
                            <p className='mx-3 fw-bold' style={{ color: "grey" }}>{value} Reviews</p>
                            <FaWhatsappSquare className='mt-1 mx-1' />
                            <FaFacebookF className='mt-1 mx-1' />
                            <BsTwitterX className='mt-1 mx-1' />
                        </div>
                        <p>{ItemReview.description}</p>
                        <hr />
                        <div className='d-flex flex-wrap' style={{ justifyContent: 'space-between' }}>
                            <div><h3>${ItemReview.price}</h3></div>
                            <div>
                                <button onClick={toggleWishlist} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    {isWishlisted ? (
                                        <FaHeart style={{ color: 'blue', fontSize: '30px', marginRight:"20px" }} onClick={handleAddToWhishlist} />
                                    ) : (
                                        <FaRegHeart style={{ fontSize: '30px', marginRight:"20px" }} />
                                    )}
                                </button>
                                <Button className='btn btn-primary px-4' onClick={handleAddToCart}>Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
