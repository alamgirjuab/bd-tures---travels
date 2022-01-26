import React from 'react';
import Slider from '../../components/Slider/Slider';
import Blogs from '../Blogs/Blogs';
import Packages from '../Packages/Packages';
import WinterHoliday from '../WinterHoliday/WinterHoliday';

const Home = () => {
    return (
        <div>
            <Slider />
            <Packages />
            <WinterHoliday />
            <Blogs />
        </div>
    );
};

export default Home;