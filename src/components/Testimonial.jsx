import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

export default function Testimonial() {
    const testimonials = [
        {
            id: 1,
            image: "/src/assets/images/t1.jpg",
            text: "Financial planners help people gain knowledge about how to invest and save their money the most efficient way.",
            name: "Zonathon Doe",
            role: "CEO & Founder X",
        },
        {
            id: 2,
            image: "/src/assets/images/t2.jpg",
            text: "Financial planners help people to know how to invest and save their money in the most efficient way possible.",
            name: "Liana Marie",
            role: "Lead Designer Meta",
        },
        {
            id: 3,
            image: "/src/assets/images/t1.jpg",
            text: "Financial planners help people gain knowledge about how to invest and save their money the most efficient way.",
            name: "Zonathon Doe",
            role: "CEO & Founder X",
        }
    ];
    return (
        <section id="testimonial" className="testimonial-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <motion.div
                            className="section-title text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} // animate only once when visible
                        >
                            <p>Testimonials</p>
                            <h2>What Clients Say !</h2>
                        </motion.div>
                    </div>
                </div>
                <div className="row">
                    <motion.div
                        className="col-lg-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} // animate only once when visible
                    >
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={2}
                            autoplay={{ delay: 3000 }}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                                enabled: true
                            }}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                            pagination={{ clickable: true }}
                            className='testimonial-swiper'
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <p className="text">{item.text}</p>
                                        <div className="testi-des">
                                            <h5>{item.name}</h5>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* <div className="navigation-wrapper">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div> */}
                            <div className="custom-navigation">
                                <button className="custom-prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                    </svg>
                                </button>
                                <button className="custom-next">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>
                            </div>

                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}