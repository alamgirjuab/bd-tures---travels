import React from 'react';
import Slider from '../../components/Slider/Slider';
import Packages from '../Packages/Packages';
import WinterHoliday from '../WinterHoliday/WinterHoliday';

const Home = () => {
    return (
        <div>
            <Slider />
            <Packages />
            <WinterHoliday />
        </div>
    );
};

export default Home;