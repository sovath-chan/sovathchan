import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContect";
import PayPal from "../Paypal";

const HomeCart = ({ setShowCart }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart from context

  const handleRemoveItem = (itemID) => {
    removeFromCart(itemID); // Remove the item from the cart using the context function
  };

  const finalTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2000,
        }}
        onClick={() => setShowCart(false)}
      ></div>

      {/* Cart Content */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          height: "100%",
          backgroundColor: "white",
          boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.3)",
          zIndex: 3000,
          overflowY: "auto",
        }}
      >
        {/* Cart Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
            Your Cart
          </h3>
          <button
            onClick={() => setShowCart(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <ul style={{ listStyle: "none", padding: "16px", margin: 0 }}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <li
                key={item.id}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    marginRight: "16px",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                  {hoveredItem === item.title && (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        background: "red",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        color: "white",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div>
                  <a
                    href="#"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#333",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </a>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#666" }}>
              Your cart is empty
            </p>
          )}
        </ul>

        {/* Cart Total */}
        {cart.length > 0 && (
          <div
            style={{
              padding: "16px",
              borderTop: "1px solid #ddd",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total: $
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </div>
        )}

        {/* Checkout Button */}
        {cart.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px",
            }}
          >
            <div style={{
              width: "100%",
              textAlign: "center",
              padding: "10px",
              textDecoration: "none",
              borderRadius: "50px",
              margin: '0px auto',
            }}>
              <PayPal total={finalTotal}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeCart;