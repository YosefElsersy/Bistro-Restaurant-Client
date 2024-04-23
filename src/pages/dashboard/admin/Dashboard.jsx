import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import {
  FaMoneyBillAlt,
  FaUsers,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch users
  const { refetch: refetchUsers, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/users");
        return res.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });

  // Fetch menu items count
  const { refetch: refetchMenuItems, data: { menuCount = 0 } = {} } = useQuery({
    queryKey: ["menuItemsCount"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/menu/count");
        return res.data;
      } catch (error) {
        console.error("Error fetching menu items count:", error);
        throw new Error("Failed to fetch menu items count");
      }
    },
  });

  // Fetch orders count
  const { refetch: refetchOrders, data: { ordersCount = 0 } = {} } = useQuery({
    queryKey: ["ordersCount"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/payments/orders-count");
        return res.data;
      } catch (error) {
        console.error("Error fetching orders count:", error);
        throw new Error("Failed to fetch orders count");
      }
    },
  });

  // Fetch revenue
  const { refetch: refetchRevenue, data: { ordersSum = 0 } = {} } = useQuery({
    queryKey: ["ordersSum"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/payments/orders-sum");
        return res.data;
      } catch (error) {
        console.error("Error fetching revenue:", error);
        throw new Error("Failed to fetch revenue");
      }
    },
  });

  // State to store the last order
  const [lastOrder, setLastOrder] = useState(null);

  // Fetch last order
  useEffect(() => {
    const fetchLastOrder = async () => {
      try {
        const res = await axiosSecure.get(
          "/payments?_limit=1&_sort=createdAt:desc"
        );
        setLastOrder(res.data[0]);
      } catch (error) {
        console.error("Error fetching last order:", error);
        throw new Error("Failed to fetch last order");
      }
    };

    fetchLastOrder();
  }, [axiosSecure]);

  return (
    <div>
<div className="stats shadow border border-[#ad343e] text-[#474747] px-6">
  {/* Your Dashboard content */}
  {/* Revenue */}
  <div className="stat">
    <div className="stat-figure ">
      <FaMoneyBillAlt className="text-[#36a835]" size={32} />
    </div>
    <div className="stat-title text-[#474747]">Revenue</div>
    <div className="stat-value">${ordersSum}</div>
  </div>
  {/* Users */}
  <div className="stat">
    <div className="stat-figure text-blue-500">
      <FaUsers size={32} /> 
    </div>
    <div className="stat-title text-[#474747]">Users</div>
    <div className="stat-value">{users.length}</div>
  </div>
  {/* Menu Items */}
  <div className="stat">
    <div className="stat-figure text-yellow-500">
      <FaUtensils size={32} />
    </div>
    <div className="stat-title text-[#474747]">Menu Items</div>
    <div className="stat-value">{menuCount}</div>
  </div>
  {/* Orders */}
  <div className="stat">
    <div className="stat-figure text-red-500">
      <FaShoppingCart className="text-[#474747]" size={32} />
    </div>
    <div className="stat-title text-[#474747]">Orders</div>
    <div className="stat-value">{ordersCount}</div>
  </div>
</div>

      {/* Last User */}
      <div className="last-user-section mt-10">
        <h2 className="text-2xl font-semibold my-4">Last User</h2>
        {users.length > 0 && (
          <div className="last-user">
            {/* Display the last user details in a table */}
            <table className="table">
              <thead className="bg-[#ad343e] text-white rounded-sm">
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{users[users.length - 1]._id}</td>
                  <td>{users[users.length - 1].name}</td>
                  <td>{users[users.length - 1].email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <Link to="/dashboard/users" className="btn bg-[#ad343e] text-white px-6 mt-5">
          Show Users
        </Link>
      </div>
      {/* Last Order */}
      <div className="last-order-section mt-10">
        <h2 className="text-2xl font-semibold my-4">Last Order</h2>
        {lastOrder && (
          <div className="last-order">
            {/* Display the last order details in a table */}
            <table className="table">
              <thead className="bg-[#ad343e] text-white rounded-sm">
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Order Price</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{lastOrder._id}</td>
                  <td>{lastOrder.createdAt}</td>
                  <td>${lastOrder.price}</td>
                  <td>{lastOrder.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <Link to='/dashboard/manage-orders'>
          <button className="btn bg-[#ad343e] text-white px-6 mt-5">Show Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
