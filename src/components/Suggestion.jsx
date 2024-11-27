import React, { useState, useEffect } from 'react';
import style from '../CSS/Suggestion.module.css';

function Suggestion() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', name: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className={style.form_div}>
      <div className={style.form_heading}>Suggestions Form</div>

      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
        ></textarea>
        <button type="submit" className={style.button_div}>
          Submit
        </button>
      </form>

      {status === 'success' && (
        <div className={style.success_message}>Thank you for your suggestion!</div>
      )}
      {status === 'error' && (
        <div className={style.error_message}>Something went wrong. Please try again.</div>
      )}
    </div>
  );
}

export default Suggestion;