import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 px-4 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-xl w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center">
            <Search className="h-10 w-10 text-primary-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">404 – Page Not Found</h1>
        <p className="text-neutral-600 text-lg mb-6">
          The page you're looking for doesn't exist or has been moved. But don’t worry — let’s get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
