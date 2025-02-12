import React from 'react';
import Banner from '../../Components/Banner';
import Marathons from '../../Components/Marathons';
import TrainingTips from '../../Components/TrainingTips';
import WhyRunWithUs from '../../Components/WhyRunWithUs';
import SponsorsSection from '../../Components/SponsorsSection';
import UpcomingMarathons from '../../Components/UpcomingMarathons';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs.jsx/AboutUs';

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="animate__animated animate__fadeInDown">
                <Banner />
            </div>
            <div className="animate__animated animate__fadeInLeft">
                <Marathons />
            </div>
            <div className="animate__animated animate__fadeInRight">
                <UpcomingMarathons />
            </div>
            <div className="animate__animated animate__zoomIn">
                <TrainingTips />
            </div>
            <div className="animate__animated animate__fadeInUp">
                <WhyRunWithUs />
            </div>
            <div className="animate__animated animate__fadeIn">
                <SponsorsSection />
            </div>
            <div className="">
                <AboutUs></AboutUs>
            </div>
            <div className="animate__animated animate__shakeX">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
