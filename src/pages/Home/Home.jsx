import React from 'react';
import Banner from '../../Components/Banner';
import Marathons from '../../Components/Marathons';
import TrainingTips from '../../Components/TrainingTips';
import WhyRunWithUs from '../../Components/WhyRunWithUs';
import SponsorsSection from '../../Components/SponsorsSection';
import UpcomingMarathons from '../../Components/UpcomingMarathons';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Marathons></Marathons>
            <UpcomingMarathons></UpcomingMarathons>
            <TrainingTips></TrainingTips>
            <WhyRunWithUs></WhyRunWithUs>
            <SponsorsSection></SponsorsSection>
        </div>
    );
};

export default Home;