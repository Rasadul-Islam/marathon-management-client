import React from 'react';

const WhyRunWithUs = () => {
    return (
        <div className="container mx-auto my-16 px-5">
            <h2 className="text-center text-3xl font-bold mb-8">Why Run with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {/* Reason 1 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Marathon Support</h3>
                    <p>
                        We provide everything you need for a successful marathon journey, from registration to training resources and race-day support.
                    </p>
                </div>
                {/* Reason 2 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Expert Coaching</h3>
                    <p>
                        Our team of expert coaches offers personalized tips and guidance to help you achieve your running goals and improve your performance.
                    </p>
                </div>
                {/* Reason 3 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Join a Community</h3>
                    <p>
                        Be part of a vibrant and supportive community of runners who share the same passion for running and marathons.
                    </p>
                </div>
                {/* Reason 4 */}
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Great Events</h3>
                    <p>
                        We host marathons across various locations and events that cater to all types of runners, whether you are a beginner or a pro.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyRunWithUs;
