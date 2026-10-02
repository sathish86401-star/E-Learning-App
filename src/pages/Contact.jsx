import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px" }}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p style={{ color: "green" }}>Thank you! Your message has been sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }}></textarea>
          </div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none" }}>Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;