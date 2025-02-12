import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInDown">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto animate__animated animate__fadeIn">
          We are passionate about promoting health, fitness, and community through marathon events. 
          Our mission is to inspire people to embrace an active lifestyle while supporting meaningful 
          causes and fostering a sense of unity.
        </p>
      </div>

      <div className="mt-5 py-10 grid md:grid-cols-2 gap-10 items-center bg-gray-300">
        {/* Left Side - Image */}
        <div className="animate__animated animate__fadeInLeft">
          <img 
            src="https://i.ibb.co.com/CswxcR4w/marathon-6660180-1280.jpg"
            alt="Marathon Runners"
            className="rounded-xl shadow-lg w-3/4 mx-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="animate__animated animate__fadeInRight">
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-3">
            We envision a world where running is more than just a sport – it's a way of bringing 
            communities together, improving mental and physical health, and raising awareness for 
            important social causes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>🏃‍♂️ Organizing exciting marathon events worldwide</li>
            <li>💙 Committed to health, wellness, and community impact</li>
            <li>🎗️ Supporting charities and social initiatives</li>
            <li>🌍 Bringing people together through running</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
