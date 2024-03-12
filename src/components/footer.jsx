import React from "react";
import { Typography, Link, Grid } from "@mui/material";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Link href="https://github.com/jaclynnburch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center">
        &copy; 2024 Jackie Burch | All Rights Reserved
      </Typography>
    </footer>
  );
};

export default Footer;

