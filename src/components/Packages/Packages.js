import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button } from 'react-bootstrap';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([])
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="my-5">
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                modules={[Controller]}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
            >
                {
                    packages.map(pac => (
                        <SwiperSlide key={pac.id} className="slide">
                            <div className="row row-cols-1 row-cols-md g-2 slide-content">
                                <div className="col">
                                    <div className="card h-100 image-container">
                                        <img src={pac.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{pac.title}</h5>
                                            <p className="card-text">{pac.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold">${pac.price}</span><span className="fw-bold">rating here</span><Button variant="outline-success">details</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
};

export default Packages;