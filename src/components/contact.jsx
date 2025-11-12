import { motion } from "framer-motion";
export default function Contact() {
    return (
        <section id="contact" className="contact-area">
            <div className="container">
                {/* Section Heading */}
                <motion.div
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} // animate only once when visible
                >
                    <p>Contact</p>
                    <h2>Get in Touch with Me!</h2>
                </motion.div>

                <motion.div
                    className="row"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} // animate only once when visible
                >
                    {/* Contact Info */}
                    <div className="col-lg-4">
                        <div
                            className="contact-content-part"

                        >
                            <div className="single-contact">
                                <div className="contact-icon">
                                    {/* Location Icon */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                    >
                                        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995Z" />
                                    </svg>
                                </div>
                                <h2>Our Office:</h2>
                                <p>156 anand nagar, hirabag road surat</p>
                            </div>

                            <div className="single-contact">
                                <div className="contact-icon">
                                    {/* Phone Icon */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.36 10.68C10.3 12.33 11.67 13.7 13.32 14.63L14.2 13.4C14.5 12.98 15.05 12.86 15.5 13.1C16.9 13.87 18.46 14.34 20.08 14.46C20.6 14.5 21 14.94 21 15.46V19.92C21 20.44 20.61 20.87 20.1 20.92C19.57 20.97 19.04 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.96 3.03 4.43 3.08 3.9C3.13 3.39 3.56 3 4.08 3H8.54C9.06 3 9.5 3.4 9.54 3.92C9.66 5.54 10.13 7.1 10.9 8.5C11.14 8.95 11.01 9.5 10.6 9.8L9.36 10.68Z" />
                                    </svg>
                                </div>
                                <h2>Contact Number:</h2>
                                <p>+91 93164 39356</p>
                            </div>

                            <div className="single-contact">
                                <div className="contact-icon">
                                    {/* Email Icon */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                    >
                                        <path d="M3 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3ZM20 7.24L12.07 14.34L4 7.22V19H20V7.24Z" />
                                    </svg>
                                </div>
                                <h2>Email Us:</h2>
                                <p>vaghelagopal160@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <div className="contact-form-area">
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" className="form-control" placeholder="Steve Milner" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" className="form-control" placeholder="hello@websitename.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Your Message</label>
                                            <textarea id="message" rows="4" className="form-control" placeholder="Write your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="theme-btn">
                                            Send Me Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
