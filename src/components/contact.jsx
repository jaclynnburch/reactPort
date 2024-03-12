import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <Container id="contact">
      <Typography variant="h4">Contact</Typography>
      <form onSubmit={handleSubmit} maxWidth="sm" style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          margin="small"
          required
          fullWidth
        />
        <TextField
          id="email"
          name="email"
          label="Email address"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
