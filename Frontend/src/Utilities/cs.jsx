import React, { useState } from "react";

const CustomerService = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    alert("Message sent!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Customer Service</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">FAQs</h2>
            <div>
              <h3 className="text-lg font-medium text-gray-700">How can I track my order?</h3>
              <p className="text-gray-600">
                You can track your order using the tracking number provided in your order confirmation email.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">What is the return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy. Please visit our returns page for more details.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">How do I contact customer service?</h3>
              <p className="text-gray-600">
                You can contact us through the form on this page or call us at 1-800-123-4567.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
          <p className="text-gray-600">
            <strong>Email:</strong> support@ecommerce.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> 1-800-123-4567
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 E-commerce St, Shopsville, EC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
