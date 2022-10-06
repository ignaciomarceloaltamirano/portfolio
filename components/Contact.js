import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading' });
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (err) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
      }
    }
  };
  return (
    <section id="contact" className="container mx-auto">
      <h2 className="text-center mb-4 title">Contact</h2>
      <div className="row">
        <div className="col-md-6 px-3 d-flex flex-column">
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div>
              <label>Name</label>
              <input
                className="w-100"
                type="text"
                placeholder="Enter your name"
                id="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="w-100"
                type="email"
                placeholder="Enter your email"
                id="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                rows={4}
                className="w-100"
                placeholder="Leave a message"
                id="message"
                value={inputs.message}
                onChange={handleChange}
              />
            </div>
            <button className="btn mt-3 mb-1" type="submit">
              Send
            </button>
            {form.state === 'loading' ? (
              <div>Sending....</div>
            ) : form.state === 'error' ? (
              <div>{form.message}</div>
            ) : (
              form.state === 'success' && <div>Sent successfully</div>
            )}
          </form>
        </div>
        <div className="col-md-6 px-3">
          <p className="form-text">
            Feel free to leave me a message here, send me an email, or you can
            find me on social media!
          </p>
          <div className="d-flex justify-content-evenly my-3">
            <Link href="https://github.com/ignaciomarceloaltamirano/">
              <a target="_blank" rel="noopener" className="icon me-2">
                <AiOutlineGithub />
              </a>
            </Link>
            <Link href="https://github.com/ignaciomarceloaltamirano/">
              <a target="_blank" rel="noopener" className="icon">
                <AiOutlineLinkedin />
              </a>
            </Link>
          </div>
          <div></div>
          <p className="form-email">email: ignacio@altamirano.dev</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
