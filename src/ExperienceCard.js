import React from 'react';
import './App.css';
import Typography from "@mui/material/Typography";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const ExperienceCard = ({ title, date, company, map}) => {
    return (
        <div className="project-card">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <img src={map} alt="map" style={{width: '100%', height: 'auto'}} />
            <div>
                <Typography
                    style={{color: "#FFFFFF", marginTop: '1rem'}}
                    fontFamily='IBM Plex Mono'
                    fontWeight={700}
                    variant='h6'>
                    {company}
                </Typography>
                <Typography
                    style={{color: "#FBF9FF"}}
                    fontFamily='IBM Plex Mono'
                    fontSize={'0.9rem'}
                    fontWeight={300}>{date}</Typography>
                <Typography
                    style={{color: "#FBF9FF",}}
                    fontFamily='IBM Plex Mono'
                    fontSize={'0.9rem'}
                    fontWeight={300}>
                    {title}
                </Typography>
            </div>
        </div>
    );
};

export default ExperienceCard;
