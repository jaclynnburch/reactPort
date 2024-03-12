import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import AboutImage from "../assets/images/profilePic.jpg";

function AboutMe() {
    return (
         
       <Box id="about-me" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            {/* Profile Card */}
            <Card sx={{ maxWidth: 245 }}>
                <CardMedia component="img" height="80" image={AboutImage} alt="About Me" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Jackie Burch
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Coding Newbie
                    </Typography>
                </CardContent>
            </Card>
            
            {/* Right-side content */}
            <Card sx={{ maxWidth: 500 }}>
              <CardContent>
                <Typography variant="body1">
                    Hi, I'm Jackie. I'm passionate about expanding my horizons and believe in the power of continuous learning. Recently, I embarked on the journey of learning full stack engineering, driven by my desire to challenge myself and explore new opportunities. I'm excited to complete this course and pursue a promising career in programming.
                </Typography>
              </CardContent>
            </Card>
        </Box>
    );
}

export default AboutMe;



