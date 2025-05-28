import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // You had Link in your original code
import hero from "../assets/Images/home.png";

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);

  // Simple validation function
  const validate = () => {
    const tempErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.includes('@')) {
      tempErrors.email = 'Email must contain @';
      valid = false;
    }

    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSignedUp(true);
    }
  };

  if (isSignedUp) {
    return (
      <div className="text-center mt-10 text-green-600">
        <h2>Signup successful! You can now access your dashboard.</h2>
        <Link to="/dashboard" className="text-blue-600 hover:underline mt-4 inline-block">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={hero} alt="Background" />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0 bg-white rounded-md shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Create an account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-900">Full Name</label>
           <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  className="w-full px-3 py-2 border rounded-md text-base"
/>

            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-900">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already joined? <Link to="/signin" className="text-blue-600 hover:underline">Sign in now</Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
