import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="container mx-auto bg-gray-400 py-12 px-6 md:px-16 my-5 mt-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fadeIn">
                    Get in <span className="text-lime-300">Touch</span>
                </h2>
                <p className="text-white text-lg md:w-3/4 mx-auto">
                    Have any questions? We'd love to hear from you. Fill out the form below or reach us on social media.
                </p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
                {/* Left Side: Contact Info */}
                <div className="flex-1 space-y-6 text-white">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-lime-300 text-3xl" />
                        <p>Mirpur, Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-lime-300 text-3xl" />
                        <p>+880 174542****</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-lime-300 text-3xl" />
                        <p>runway@gmail.com</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 mt-4">
                        <a href="#" className="text-white hover:text-lime-300 text-3xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-white hover:text-lime-300 text-3xl">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white hover:text-lime-300 text-3xl">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="flex-1 w-full bg-white p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-lime-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-lime-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-lime-300"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-lime-300 text-gray-900 font-bold py-3 rounded-md hover:bg-lime-400 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
