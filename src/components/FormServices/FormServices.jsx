import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-phone-number-input/style.css";
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon

function FormServices() {
  const navigate = useNavigate(); // Initialize navigate
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here

    // For now, just log the data to the console
    console.log("Form submitted with the following data:", {
      phoneNumber,
      // Add other form fields as necessary
    });

    // Reset form fields or handle post-submit logic here if needed
    setPhoneNumber(""); // Reset phone number for now
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white font-sans rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => navigate(-1)} // Go back when clicked
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          <FaArrowLeft className="mr-2" /> {/* Arrow icon */}
          Back
        </button>
      </div>
      <h1 className="text-3xl text-gray-800 font-bold text-center mb-4">
        Contact Us
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-700 text-sm block mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 text-sm block mb-1">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 text-sm block mb-1">Your Phone Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 text-sm block mb-1">Subject</label>
          <input
            type="text"
            placeholder="Enter the subject"
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 text-sm block mb-1">Message</label>
          <textarea
            placeholder="Write your message here"
            rows="5"
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 px-6 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default FormServices;
