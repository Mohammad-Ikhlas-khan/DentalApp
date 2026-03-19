import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 w-full min-w-md rounded-lg p-4 md:p-6">

      <div className="bg-blue-500 text-white py-6 px-4 md:py-10 text-center">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4">
          Book Your Dentist Appointment Easily
        </h1>
        <p className="text-lg mb-6">
          Find experienced dentists near you and book instantly
        </p>
      </div>

      <div className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Verified Doctors</h2>
          <p className="text-gray-600">
            All dentists are verified and experienced
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Easy Booking</h2>
          <p className="text-gray-600">
            Book appointments in just a few clicks
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
          <p className="text-gray-600">
            We are always here to help you
          </p>
        </div>

      </div>

      <div className="text-center py-10">
        <Link to="/dentists">
         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer">
            Find Dentists
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Home;