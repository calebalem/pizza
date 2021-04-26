import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};
const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      <Link to="/home">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Order;
