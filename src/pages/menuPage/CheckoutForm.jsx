import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FaPaypal } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../src/hooks/useCart"; // Import the useCart hook

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [refetch] = useCart();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.log("Price is not a number or less than 1");
      return;
    }
    axiosSecure.post(`/create-payment-intent`, { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
  
    if (card == null) {
      return;
    }
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
  
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("success!");
      console.log("[PaymentMethod]", paymentMethod);
    }
  
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
  
    if (confirmError) {
      console.log(confirmError);
    }
  
    if (paymentIntent.status === "succeeded") {
      setCardError(`Your transactionId is${paymentIntent.id} `);
  
      const paymentInfo = {
        email: user.email,
        transitionId: paymentIntent.id,
        price,
        quantity: cart.length,
        status: "Order pending",
        itemName: cart.map((item) => item.name),
        cartItems: cart.map((item) => item._id),
        menuItem: cart.map((item) => item.menuItemId),
      };
  
      axiosSecure.post("https://bistro-restaurant-server-na3r.onrender.com/payments", paymentInfo, {
        headers: {
          Authorization: `Bearer ${token}` // Include authentication token in headers
        }
      }).then((res) => {
        console.log(res.data);
        refetch();
      });
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Navigate to order page after payment success
      navigate("/order");
      // Reset the cart by refetching cart data
    }
  };
  

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-24">
      {/*left side */}
      <div className="md:w-1/2 w-full space-y-5 ">
        <div className="bg-[#474747] p-6 rounded-md">
          <h2 className="text-4xl font-extrabold text-[#ffffff]">${price}</h2>
          <ul className="text-[#ffffff] mt-10 space-y-6">
            <h4 className="text-lg font-semibold">Order Summary</h4>
            <li className="flex flex-wrap gap-4 text-base">
              Number of Items:{" "}
              <span className="ml-auto font-bold">{cart.length}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">
              Total <span className="ml-auto">${price}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* right side*/}
      <div className="md:w-1/3 w-full space-y-3 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8">
        <h4 className="text-lg font-semibold">Process Your Payment!</h4>
        <h5 className="font-medium">Credit/Debit Card</h5>
        {/* Stripe Form */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-sm mt-5 btn-primary w-full text-white"
          >
            Pay
          </button>
        </form>
        {cardError ? (
          <p className="text-red text-center italic text-xs">{cardError}</p>
        ) : (
          ""
        )}

        {/* Paypal */}
        <div className="mt-5 text-center">
          <hr />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-sm mt-5 bg-orange-500 text-white"
          >
            <FaPaypal /> Pay With Paypal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
