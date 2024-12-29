import React from 'react';
import Banner from '../../Components/Banner';
import Marathons from '../Marathons/Marathons';
import TrainingTips from '../../Components/TrainingTips';
import WhyRunWithUs from '../../Components/WhyRunWithUs';
import SponsorsSection from '../../Components/SponsorsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marathons></Marathons>
            <TrainingTips></TrainingTips>
            <WhyRunWithUs></WhyRunWithUs>
            <SponsorsSection></SponsorsSection>

        </div>
    );
};

export default Home;