import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = ({ userId }) => {
  const [cart, setCart] = useState([]); // State to manage cart items
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  // Function to add item to cart
  const addToCart = async (item) => {
    console.log("Adding to cart:", item); // Debugging
    console.log("User ID:", userId); // Debugging

    if (!userId) {
      console.error("User ID is missing. Please log in."); // Debugging
      return;
    }

    try {
      // Send a POST request to the backend to add the item to the cart
      const response = await axios.post("http://localhost:3000/add-to-cart", {
        userId, // Pass the logged-in user's ID
        item,   // Pass the item to add to the cart
      });

      console.log("Backend response:", response.data); // Debugging

      // Update the local cart state with the response from the backend
      setCart(response.data.cart);
      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    } catch (error) {
      console.error("Error adding to cart:", error); // Debugging
    }
  };

  // Fetch cart items from the backend when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${userId}`);
        console.log("Fetched cart:", response.data.cart); // Debugging
        setCart(response.data.cart); // Update the local cart state with the fetched cart items
      } catch (error) {
        console.error("Error fetching cart:", error); // Debugging
      }
    };

    if (userId) {
      fetchCart(); // Fetch cart items only if the user is logged in
    }
  }, [userId]);

  // Sample menu items
  const menuItems = [
    {
      id: 1,
      name: "Idli Sambar",
      image: "idlidosa.jpg",
      description: "Hey, this is a South Indian dish which is very famous in India.",
    },
    {
      id: 2,
      name: "Chole Bhature",
      image: "meals.jpg",
      description: "Chole bhature is a North Indian dish of spicy chickpeas served with deep-fried bread.",
    },
    {
      id: 3,
      name: "Misal Pav",
      image: "Misal-pav.jpg",
      description: "Misal pav is a spicy, flavorful dish from Maharashtra, India that combines a sprouted bean curry with bread rolls.",
    },
    {
      id: 4,
      name: "Oli bhel",
      image: "olibhel.png",
      description: "Oli Bhel is a type of bhel puri, which is a popular street food in India.Bhelpuri is a savoury snack originally from India, and is also a type of chaat. It is made of puffed rice, crumbled crunchy puri, onions, coriander and tossed with two chutneys: a green spicy coriander chutney and a brown tangy tamarind chutney.",
    },
    {
      id: 5,
      name: "Pani Puri",
      image: "Pani-Puri.jpg",
      description: "Pani puri, also known as golgappa or phuchka, is a popular Indian street food snack of crispy fried balls filled with a spicy, tangy mixture. Pani puri has evolved significantly over time. Also known as 'golgappa,' the dish consists of a small, hollow, fried wheat and/or semolina shell filled with spiced mashed potatoes and served with either a green or a brown-coloured dipping water; or both.",
    },
    {
      id: 6,
      name: "Pav Bhaji",
      image: "pavbhaji.jpg",
      description: "Pav bhaji is a spicy Indian dish of mashed vegetables in a thick gravy served with bread.",
    },
  ];

  return (
    <>
      <div className="hero-section text-center py-5 bg-dark">
        <h3 className="display-4" style={{background:"color:rgba(17, 17, 17, 0.58);",color:"white"}}><i><b>Here Are Some Menu</b></i></h3>
        <p className="lead" style={{color:"whitesmoke", background:"#111",width:"500px"}}><i>_ Enjoy Searching Foods in an effective way _</i></p>
        <form className="d-flex justify-content-center">
          <input
            className="form-control w-50 me-2"
            type="search"
            placeholder="Enter your delivery location"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Find Food
          </button>
        </form>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
          {menuItems.map((item) => (
            <div className="col" key={item.id}>
              <div className="card bg-black text-white">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Popup Notification */}
      {showPopup && (
        <div
          className="position-fixed bottom-0 end-0 m-3 p-3 bg-success text-white rounded"
          style={{ zIndex: 1000 }}
        >
          Item added to cart!
        </div>
      )}
    </>
  );
};

export default Menu;