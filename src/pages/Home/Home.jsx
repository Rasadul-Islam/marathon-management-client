import React from 'react';
import Banner from '../../Components/Banner';
import Marathons from '../../Components/Marathons';
import TrainingTips from '../../Components/TrainingTips';
import WhyRunWithUs from '../../Components/WhyRunWithUs';
import SponsorsSection from '../../Components/SponsorsSection';
import UpcomingMarathons from '../../Components/UpcomingMarathons';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Marathons></Marathons>
            <UpcomingMarathons></UpcomingMarathons>
            <TrainingTips></TrainingTips>
            <WhyRunWithUs></WhyRunWithUs>
            <SponsorsSection></SponsorsSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;