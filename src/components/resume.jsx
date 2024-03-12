import React from "react";
import { Container, Typography, Paper, Button } from "@mui/material"; // Import Button component
import { CloudDownload } from "@mui/icons-material";

const Resume = () => {
  const handleDownloadResume = () => {
    // Add logic to handle resume download
  };

  return (
    <Container id="resume" maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, textAlign: "left" }}>
        <Typography variant="body3" gutterBottom>
          Jaclynn Burch
          <br />
            Phone: (123) 456-7890
          <br />
          Email: jane.doe@example.com
          <br/>
        </Typography>
        <br/>
        <Typography variant="h8" gutterBottom>
          Objective:
        </Typography>
        <Typography variant="body2" gutterBottom>
          A dedicated and experienced Full Stack Engineer with a passion for building robust and scalable web applications. Skilled in both frontend and backend development, with expertise in React, Node.js, MongoDB, and AWS. Seeking to leverage my skills and experience to contribute to innovative projects in a dynamic team environment.
        </Typography>
        <Typography variant="h8" gutterBottom>
          <br/>
                   Skills:
        </Typography>
        <Typography variant="body2" gutterBottom>
          - Frontend Technologies: HTML, CSS, JavaScript
          <br />
          - Backend Technologies: Node.js, Express
          <br />
          - Database Systems: SQL (MySQL), NoSQL (MongoDB), Mongoose
          <br />
          - Version Control: Git, GitHub
          <br />
          - Deployment & DevOps: Docker, AWS, Heroku, Netlify
          <br />
          - Other: RESTful APIs, GraphQL, Agile methodologies
        </Typography>
        <Typography variant="h8" gutterBottom>
          <br/>
          Experience:
        </Typography>
        <Typography variant="body2" gutterBottom>
          - Developed and maintained frontend and backend components for various projects.
          <br />
          - Collaborated with cross-functional teams to deliver high-quality software solutions.
          <br />
          - Implemented responsive design principles to ensure compatibility across various devices.
          <br />
       
          - Designed and optimized database schemas to improve data retrieval performance.
          <br />
          - Integrated third-party APIs for enhanced functionality and user experience.
          <br />
          - Participated in code reviews and provided constructive feedback to team members.
        </Typography>        
        <Typography variant="h8" gutterBottom>
          <br/>
          Certifications: 
        </Typography>
        <Typography variant="body2" gutterBottom>
          - Bootcamp Certificate, Full Stack Web Development, 2024
        </Typography>
        <br />
        <Button variant="contained" color="primary" startIcon={<CloudDownload />} onClick={handleDownloadResume}>
          Download Resume
        </Button>
      </Paper>
    </Container>
  );
};

export default Resume;


