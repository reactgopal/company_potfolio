import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
    {
        id: 1,
        category: "Design",
        title: "Mobile Application Design",
        image: "/src/assets/images/p1.jpg",
        role: "Lead UI/UX Designer",
        duration: "3 months",
        overview:
            "Created a complete mobile application design system including wireframes, high-fidelity mockups, and interactive prototypes.",
        technologies: ["UI/UX Design", "Prototyping", "User Research", "Wireframing"],
    },
    {
        id: 2,
        category: "Design",
        title: "Brand Identity and Motion Design",
        image: "/src/assets/images/p2.jpeg",
        role: "Brand & Motion Designer",
        duration: "2 months",
        overview:
            "Developed brand identity and motion graphics assets for a digital marketing campaign.",
        technologies: ["Brand Design", "Motion Graphics", "Animation", "Visual Identity"],
    },
    {
        id: 3,
        category: "Game",
        title: "3D Racing Game UI",
        image: "/src/assets/images/p3.webp",
        role: "Game UI Designer",
        duration: "4 months",
        overview:
            "Immersive 3D racing game interface with real-time HUD elements and dynamic menu systems.",
        technologies: ["Game UI", "3D Design", "Interactive Design", "User Testing"],
    },

];

export default function Project() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selected, setSelected] = useState(null);

    const categories = ["All", "Design", "Game"];
    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter((item) => item.category === activeCategory);

    return (
        <section id="project" className="project-area">
            <div className="container">
                {/* Section Title */}
                <motion.div
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p>Here are some of my projects</p>
                    <h2>My Projects</h2>
                </motion.div>

                {/* Tabs */}
                <div className="tab-menu">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="row">
                    {filteredProjects.map((item) => (
                        <motion.div
                            key={item.id}
                            className="col-lg-4 col-md-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // whileHover={{ scale: 1.02 }}
                            // transition={{ duration: 0.4 }}
                        >
                            <div className="project-card" onClick={() => setSelected(item)}>
                                <div className="project-image">
                                    <img src={item.image} alt={item.title} />
                                    <motion.div
                                        className="overlay"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="overlay-content">
                                            <p>{item.overview}</p>
                                            <div className="tags">
                                                {item.technologies.map((tech, i) => (
                                                    <span key={i}>{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="project-info">
                                    <p className="category">{item.category}</p>
                                    <h3>{item.title}</h3>
                                    <div className="overlay-content">

                                        <div className="tags">
                                            {item.technologies.map((tech, i) => (
                                                <span key={i}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{ background: "white" }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3>{selected.title}</h3>
                            <img src={selected.image} alt={selected.title} />
                            <p>{selected.overview}</p>
                            <div className="tags">
                                {selected.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <button className="close-btn" onClick={() => setSelected(null)}>
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


/*import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
    {
        id: 1,
        category: "Design",
        title: "Mobile Application Design",
        image: "/src/assets/images/p1.jpg",
    },
    {
        id: 2,
        category: "Design",
        title: "Brand Identity and Motion Design",
        image: "/src/assets/images/p2.jpeg",
    },
    {
        id: 3,
        category: "Game",
        title: "3D Racing Game UI",
        image: "/src/assets/images/p3.webp",
    },
    {
        id: 4,
        category: "Branding",
        title: "Corporate Brand Kit",
        image: "/src/assets/images/p4.jpg",
    },
    {
        id: 5,
        category: "Marketing",
        title: "Social Media Campaign",
        image: "/src/assets/images/p5.jpg",
    },
];

export default function Project() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Design", "Game", "Branding", "Marketing"];

    const filteredProjects = activeCategory === "All" ? projectsData : projectsData.filter((item) => item.category === activeCategory);
    console.log(filteredProjects, "filteredProjects");
    return (
        <section id="project" className="project-area">
            <div className="container">
                <motion.div className="section-title text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} // animate only once when visible
                >
                    <p>Here are some of my projects</p>
                    <h2>My Projects</h2>
                </motion.div>

                <div className="tab-menu">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="row">
                    {filteredProjects.map((item) => (
                        <div className="col-lg-4 col-md-6" key={item.id}>
                            <div className="project-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="project-info">
                                <p className="category">{item.category}</p>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

*/