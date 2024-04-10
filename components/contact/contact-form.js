"use client";

import { useState } from "react";
import classes from "./contact-form.module.css";

export default function ContactForm({ innerRef, hidden }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, such as sending data to a server or displaying a success message

    setFormData((prevState) => ({
      name: "",
      email: "",
      message: "",
    }));
    alert("Form sent successfully");
  };

  return (
    <div
      className={`${classes.form_container} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <form onSubmit={handleSubmit} className={classes.form}>
        <h1>Contact us</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
