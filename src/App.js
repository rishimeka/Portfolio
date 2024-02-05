import React, {useEffect, useRef, useState} from "react";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";
import './App.css';
import Dallas_Map from './Images/Dallas_Map.png';
import Boston_Map from './Images/Boston_Map.png';
import ExperienceCard from "./ExperienceCard";

function App() {
    const professionalExperience = [
        {
            title: "Seasonal Analyst",
            company: "Goldman Sachs",
            date: "January 2024 - Present",
            image: Dallas_Map,

        },
        {
            title: "Salesforce Developer Intern",
            company: "Walker & Dunlop",
            date: "August 2023 - November 2023",
            image: Dallas_Map,

        },
        {
            title: "Summer Analyst",
            company: "Goldman Sachs",
            date: "June 2023 - August 2023",
            image: Dallas_Map,

        },
        {
            title: "Salesforce Developer Intern",
            company: "BenefitMall",
            date: "June 2022 - April 2023",
            image: Dallas_Map,

        },
        {
            title: "Software Engineering Intern",
            company: "Tech for Good Inc.",
            date: "June 2021 - August 2021",
            image: Boston_Map,

        }
    ]
    const projects = [
        {
            title: "FIRE Up",
            date: "April 2022",
            categories: ["ACM Projects", "Front End Development"],
            href: "https://link-to-fire-up-project.com",
        },
        {
            title: "DMV Simulation",
            date: "October 2022",
            categories: ["Operating Systems", "Java Project"],
            href: "https://link-to-dmv-simulation.com",
        },
        {
            title: "Mind Reader",
            date: "December 2022",
            categories: ["Software Engineering", "Mobile App Development"],
            href: "https://link-to-mind-reader.com",
        },
        {
            title: "Morse Code",
            date: "December 2021",
            categories: ["Personal Project", "Java Project"],
            href: "https://link-to-morse-code.com",
        },
        {
            title: "Sudoku",
            date: "October 2022",
            categories: ["Personal Project", "Java Project"],
            href: "https://link-to-sudoku.com",
        },
        {
            title: "Ultimate Tic-Tac-Toe",
            date: "December 2021",
            categories: ["Computer Science II", "Java Project"],
            href: "https://link-to-ultimate-tic-tac-toe.com",
        }
    ];

    const personalProjectRef = useRef(null);
    const professionalExperienceRef = useRef(null);
    const courseWorkRef = useRef(null);
    const contactInformationRef = useRef(null);

    const [selected, setSelected] = useState("Personal Projects");

    const data = [
        {
            name: "Personal Projects",
            ref: personalProjectRef,
        },
        {
            name: "Professional Experience",
            ref: professionalExperienceRef,
        },
        {
            name: "Course Work",
            ref: courseWorkRef,
        },
        {
            name: "Contact Information",
            ref: contactInformationRef,
        },
    ];
    const refsArray = [personalProjectRef, professionalExperienceRef, courseWorkRef, contactInformationRef];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.getAttribute('name'));
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold to when you want the focus to change
        );

        refsArray.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Cleanup observer on unmount
        return () => {
            refsArray.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    });

    function onClickHandler(itemName) {
        setSelected(itemName);
        const item = data.find((i) => i.name === itemName);
        if (item && item.ref.current) {
            item.ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <div style={{ display: 'flex', height: '100vh', overflowY: "clip" }}>
            {/* Style Links and Meta */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Left Side Container */}
            <div style={{ padding: '3rem', flex: 1}}>
                <Typography
                    style={{color: "#FFFFFF"}}
                    fontFamily='IBM Plex Mono'
                    fontWeight={700}
                    variant='h2'>
                    Hey! My name is Rishi Meka
                </Typography>
                <Typography
                    style={{color: "#FFFFFF", marginTop: '1rem'}}
                    fontFamily='IBM Plex Mono'
                    fontWeight={500}
                    variant='body1'>
                    As a Senior at the {' '} <span style={{color: "#5FA5D3"}}>University of Texas at Dallas</span> majoring
                    in {' '} <span style={{color: "#5FA5D3"}}>Software Engineering</span>, I'm currently a
                    {' '} <span style={{color: "#5FA5D3"}}>Seasonal Intern</span> in Human Capital Management at
                    {' '} <span style={{color: "#5FA5D3"}}>Goldman Sachs</span>, focusing on developing
                    {' '} <span style={{color: "#5FA5D3"}}>full-stack software</span> solutions to enhance employee
                    lifecycle processes. My diverse tech journey includes a
                    {' '} <span style={{color: "#5FA5D3"}}>Salesforce Development</span> Internship at
                    {' '} <span style={{color: "#5FA5D3"}}>BenefitMall</span>, collaboration on enterprise CRM enhancements at
                    {' '} <span style={{color: "#5FA5D3"}}>Walker Dunlop</span>, and leading a project at
                    {' '} <span style={{color: "#5FA5D3"}}>Tech for Good Inc.</span> to develop an app using
                    {' '} <span style={{color: "#5FA5D3"}}>Flutter</span>,
                    {' '} <span style={{color: "#5FA5D3"}}>Dart</span>, and
                    {' '} <span style={{color: "#5FA5D3"}}>Machine Learning</span>.
                </Typography>

                {/* Navigation Links */}
                <div style={{ marginTop: '2rem' }}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ display: "flex", alignItems: "center", marginTop: '2rem', cursor: 'pointer' }}
                            onClick={() => onClickHandler(item.name)}
                        >
                            <Typography
                                style={{ color: selected === item.name ? "#5FA5D3" : "#FFFFFF", flex: 1 }}
                                fontWeight={500}
                                fontFamily='IBM Plex Mono'
                                variant='body1'
                            >
                                {index + 1}.
                            </Typography>
                            <div style={{ height: '2px', width: '20%', background: selected === item.name ? "#5FA5D3" : "#FFFFFF", marginRight: '1rem' }} />
                            <Typography
                                style={{ color: selected === item.name ? "#5FA5D3" : "#FFFFFF", flex: 2 }}
                                fontWeight={500}
                                noWrap
                                align={'right'}
                                fontFamily='IBM Plex Mono'
                                variant='body1'
                            >
                                {item.name}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
            {/* Right Side Container */}
            <div style={{ overflowY: "auto", height: '100vh', padding: '3rem', flex: 1, marginBottom: '5rem'}}>
                <div name='Personal Projects' ref={personalProjectRef} className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            date={project.date}
                            href={project.href}
                            categories={project.categories}
                        />
                    ))}
                </div>
                <div name='Professional Experience' ref={professionalExperienceRef} className="projects-grid">
                    {professionalExperience.map((project, index) => (
                        <ExperienceCard
                            key={index}
                            title={project.title}
                            date={project.date}
                            map={project.image}
                            company={project.company}
                        />
                    ))}
                </div>
                <div name='Course Work' ref={courseWorkRef}>
                    {/* Course Work Content Here */}
                </div>
                <div name='Contact Information' ref={contactInformationRef}>
                    {/* Contact Information Content Here */}
                </div>
            </div>
        </div>
    );
}

export default App;
