import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);
const Payment = () => {
    const [cart] = useCart();
    console.log(cart);
    
    // Calculate the total price of items in the cart
    const totalPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
