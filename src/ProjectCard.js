import React from 'react';
import './App.css';
import Typography from "@mui/material/Typography";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const ProjectCard = ({ title, date, categories, href}) => {
    return (
        <div className="project-card">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div>
                <Typography
                    style={{color: "#FBF9FF"}}
                    fontFamily='IBM Plex Mono'
                    fontSize={'1rem'}
                    fontWeight={300}>{date}</Typography>
                {categories.map((category, index) => (
                    <Typography
                        style={{color: "#FBF9FF",}}
                        fontFamily='IBM Plex Mono'
                        fontSize={'1rem'}
                        fontWeight={300}
                        key={index}>{category}</Typography>
                ))}
            </div>
            <div style={{display: 'flex', alignItems: "center", marginTop:  '2rem'}}>
                <Typography
                    style={{color: "#FFFFFF", display: 'flex', alignItems: 'center'}}
                    fontFamily='IBM Plex Mono'
                    fontWeight={700}
                    variant='h5'>
                    {title}
                </Typography>
                <OpenInNewIcon style={{color: "#FBF9FF", marginLeft: '1rem'}} />
            </div>
        </div>
    );
};

export default ProjectCard;
