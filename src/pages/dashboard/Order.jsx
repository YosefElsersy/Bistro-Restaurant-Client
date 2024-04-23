import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://bistro-restaurant-server-na3r.onrender.com/payments/user-orders/?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  console.log(orders);

  const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString();
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 w-full">
      <div className="">
        <div className="py-28 flex flex-col items-center justify-center">
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Track All Your<span className="text-[#ad343e]"> Orders !</span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        {orders.length > 0 ? (
          <div>
            <div className="my-10">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead className="bg-[#ad343e] text-white rounded-sm">
                    <tr>
                      <th>#</th>
                      <th>Order Date</th>
                      <th>transitionId</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Items</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={order._id}>
                        <td>{index + 1}</td>
                        <td>{formatDate(order.createdAt)}</td>
                        <td className="font-medium">{order.transitionId}</td>
                        <td>${order.price}</td>
                        <td>{order.status}</td>
                        <td>
                          {order.itemName.map((itemName, idx) => (
                            <div key={idx}>
                              <p>{itemName}</p>
                              <p>Quantity: {order.quantity}</p>
                            </div>
                          ))}
                        </td>
                        <td>
                          <Link
                            to="/contacts"
                            className="btn btn-circle px-10  text-[#474747] border-1 border-black border-solid  hover:bg-[#474747] hover:text-white"
                          >
                            Contact
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <hr />
          </div>
        ) : (
          <div className="text-center mt-20">
            <p>Cart is empty. Please add products.</p>
            <Link to="/menu">
              <button className="btn bg-[#ad343e] text-white mt-3">
                Back to Menu
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
