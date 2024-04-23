import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem('access-token');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('https://bistro-restaurant-server-na3r.onrender.com/forms', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    fetchMessages();
  }, [token]);

  const handleDeleteMessage = async (messageId) => {
    try {
      const res = await fetch(`https://bistro-restaurant-server-na3r.onrender.com/forms/${messageId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error('Failed to delete message');
      }
      // Remove the deleted message from the local state
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== messageId)
      );
      // Show success message
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message deleted successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error deleting message:', error.message);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {messages.length > 0 ? (
        <table className="table w-full">
          <thead className="bg-[#ad343e] text-white rounded-sm">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{new Date(message.createdAt).toLocaleDateString()}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>
                  <button
                    onClick={() => handleDeleteMessage(message._id)}
                    className="btn btn-sm bg-gray-500 text-white hover:text-gray-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-2xl font-semibold my-4">
          No messages <span className="text-[#ad343e]">available</span>.
        </p>
      )}
    </div>
  );
};

export default Messages;
