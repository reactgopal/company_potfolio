import React from 'react'
import profile from '../assets/images/profile.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";



export default function About() {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-image-part">
                            <img src={profile} alt="about" className="about-img" />
                            <h2 className="about-name">Gopal Vaghela</h2>
                            <div className="about-btn">
                                <h6>Available for Work</h6> <span className="status-dot"></span>
                            </div>
                            <div className="about-social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <FaFacebook className='about-icons' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaXTwitter className='about-icons' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn className='about-icons' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FiGithub className='about-icons' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <h2 className="about-title">
                                Hello, I’m Gopal Vaghela, <br />
                                <span>Full Stack Developer</span> and{" "}
                                Back End Developer Based in India.
                            </h2>
                            <div className='hero-btn'>
                                <button className="theme-btn">
                                    Download CV
                                    <GoDownload className='ms-1 fs-6'/>
                                </button>
                            </div>

                            <div className="skills-list">
                                <span>➜ Logo Design</span>
                                <span>➜ Branding Identity</span>
                                <span>➜ Web Design</span>
                                <span>➜ Social Marketing</span>
                                <span>➜ Digital Marketing</span>
                                <span>➜ Product Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
