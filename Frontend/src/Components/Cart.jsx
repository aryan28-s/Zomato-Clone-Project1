import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${userId}`);
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [userId]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Your Cart</h1><br></br>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-black text-white">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <Link to="/menu" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div><br></br>
    </div>
  );
};

export default Cart;