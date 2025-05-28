import React from 'react';

function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to MedAlert, your trusted companion in managing your medications and health appointments. 
        We are committed to helping you stay on track with your medication schedules, appointments, 
        and health goals through a simple and intuitive platform.
      </p>
      <p className="text-gray-700 mb-4">
        Our mission is to empower individuals to take control of their health with timely reminders, 
        personalized medication tracking, and easy access to your medical profile. We believe that 
        health management should be accessible, convenient, and stress-free.
      </p>
      <p className="text-gray-700">
        Founded by passionate healthcare and tech enthusiasts, MedAlert combines technology with 
        empathy to create a tool that supports your wellbeing every step of the way.
      </p>
    </section>
  );
}

export default AboutUs;
