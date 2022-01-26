import React from 'react';
import { FcOldTimeCamera, FcShop } from 'react-icons/fc';
import { VscLocation } from 'react-icons/vsc';
import { RiHandHeartLine } from 'react-icons/ri';

const WinterHoliday = () => {
    return (
        <div className="text-center my-5">
            <h5>Enjoy Your</h5>
            <h1>Winter Holiday</h1>
            <p className="mx-5">orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum.</p>
            <div className="mx-5">
                <div className="row my-5">
                    <div className="col-md-3 shadow p-3 mb-5 bg-body roundedpy-5">
                        <span className="fs-1"><FcOldTimeCamera /></span>
                        <h3>Restaurants</h3>
                        <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                    </div>
                    <div className="col-md-3 shadow p-3 mb-5 bg-body rounded py-5">
                        <span className="fs-1"><VscLocation /></span>
                        <h3>Sightseeing</h3>
                        <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                    </div>
                    <div className="col-md-3 shadow p-3 mb-5 bg-body rounded py-5">
                        <span className="fs-1"><FcShop /></span>
                        <h3>Shops & Boutiques</h3>
                        <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                    </div>
                    <div className="col-md-3 shadow p-3 mb-5 bg-body rounded py-5">
                        <span className="fs-1"><RiHandHeartLine /></span>
                        <h3>Where to Stay</h3>
                        <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinterHoliday;