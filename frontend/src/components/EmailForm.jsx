import React, { useState } from "react";

const EmailForm = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <div className="email-form-container">
      <style jsx>{`
        .email-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }

        .email-form {
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .email-form input {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
          max-width: 300px;
        }

        .email-form button {
          padding: 10px 50px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          width: 110%;
        }

        .email-form button:hover {
          background-color:rgb(11, 90, 174);
        }
      `}</style>
      <form className="email-form" onSubmit={handleSubmit}>
        <center><h2>Quiz Application</h2></center>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;