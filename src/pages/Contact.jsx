import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personalInfo';

const createCaptcha = () => {
  const first = Math.floor(Math.random() * 9) + 1;
  const second = Math.floor(Math.random() * 9) + 1;
  const answer = first + second;

  return {
    question: `${first} + ${second} = ?`,
    answer
  };
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [captcha, setCaptcha] = useState(createCaptcha());

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetCaptcha = () => {
    setCaptcha(createCaptcha());
    setFormData((prev) => ({ ...prev, captcha: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.captcha) !== captcha.answer) {
      setStatusMessage('Captcha answer is incorrect. Please solve the math challenge correctly.');
      resetCaptcha();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        'EmailJS is not configured yet. Add your service ID, template ID, and public key to the .env file.'
      );
      return;
    }

    setLoading(true);
    setStatusMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', captcha: '' });
      resetCaptcha();
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatusMessage(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        padding: 'clamp(60px, 8vw, 110px) 0',
     
        color: '#ffffff',
        minHeight: 'calc(100vh - 76px)',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* SECTION HEADER */}
        <div style={{ maxWidth: '620px', marginBottom: '50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
              color: '#a3e635',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '25px',
                height: '1px',
                background: '#a3e635',
              }}
            />
            06 / Contact
          </div>

          <h1
            style={{
              margin: '0 0 18px',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 750,
              lineHeight: 1.05,
              letterSpacing: '-0.05em',
              color: '#ffffff',
            }}
          >
            Get In <br />
            <span style={{ color: '#a3a3a3' }}>Touch</span>
            <span style={{ color: '#a3e635' }}>.</span>
          </h1>

          <p
            style={{
              margin: 0,
              color: '#a3a3a3',
              fontSize: '15px',
              lineHeight: 1.85,
            }}
          >
            Interested in working together or have an opportunity? Drop me a message or connect through direct channels.
          </p>
        </div>

        {/* MAIN GRID CONTENT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(32px, 5vw, 60px)',
            alignItems: 'start',
          }}
        >
          {/* LEFT COLUMN: CONTACT CARDS & SOCIALS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div
              style={{
                padding: '24px',
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '4px',
                  background: '#10141A',
                  border: '1px solid #252C35',
                  color: '#a3e635',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                    color: '#737373',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                    fontWeight: 600,
                  }}
                >
                  Email Address
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              style={{
                padding: '24px',
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '4px',
                  background: '#10141A',
                  border: '1px solid #252C35',
                  color: '#a3e635',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                    color: '#737373',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                    fontWeight: 600,
                  }}
                >
                  Location
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div
              style={{
                padding: '28px',
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '6px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  margin: '0 0 8px',
                  color: '#ffffff',
                }}
              >
                Follow & Connect
              </h3>
              <p
                style={{
                  color: '#a3a3a3',
                  fontSize: '13px',
                  lineHeight: 1.7,
                  margin: '0 0 20px',
                }}
              >
                Check out my open source repositories or reach out professionally via social profiles.
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  {
                    href: personalInfo.socialLinks.github,
                    label: 'GitHub Profile',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    ),
                  },
                  {
                    href: personalInfo.socialLinks.linkedin,
                    label: 'LinkedIn Profile',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    ),
                  },
                  {
                    href: personalInfo.socialLinks.twitter,
                    label: 'Twitter Profile',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    ),
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '3px',
                      background: '#10141A',
                      border: '1px solid #252C35',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a3a3a3',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div
            style={{
              background: '#10141A',
              border: '1px solid #252C35',
              borderRadius: '6px',
              padding: 'clamp(24px, 5vw, 36px)',
              position: 'relative',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 8px',
                color: '#ffffff',
              }}
            >
              Send a Message
            </h2>
            <p
              style={{
                color: '#a3a3a3',
                fontSize: '13px',
                lineHeight: 1.7,
                margin: '0 0 28px',
              }}
            >
              Fill in the form below and I'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '30px 20px',
                  borderRadius: '4px',
                  background: 'rgba(163, 230, 53, 0.05)',
                  border: '1px solid rgba(163, 230, 53, 0.25)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(163, 230, 53, 0.1)',
                    color: '#a3e635',
                    marginBottom: '16px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', color: '#ffffff', margin: '0 0 8px' }}>
                  Thank you! Message Sent.
                </h3>
                <p style={{ color: '#a3a3a3', fontSize: '14px', margin: '0 0 20px' }}>
                  I have received your message and will reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: '10px 20px',
                    background: '#0a0a0a',
                    border: '1px solid #333333',
                    color: '#ffffff',
                    borderRadius: '3px',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {statusMessage && (
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '4px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#f87171',
                      fontSize: '13px',
                    }}
                  >
                    {statusMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '3px',
                      background: '#02141ac5',
                      border: '1px solid #252C35',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '3px',
                      background: '#02141ac5',
                      border: '1px solid #252C35',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Project inquiry"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '3px',
                      background: '#02141ac5',
                      border: '1px solid #252C35',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi, I reviewed your portfolio and would like to discuss..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '3px',
                      background: '#02141ac5',
                      border: '1px solid #252C35',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '14px',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* CAPTCHA CHALLENGE */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '3px',
                    background: '#10141A',
                    border: '1px solid #252C35',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <label
                    htmlFor="captcha"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Human verification: <span style={{ color: '#a3e635' }}>{captcha.question}</span>
                  </label>

                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    required
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Enter the answer"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '3px',
                      background: '#02141ac5',
                      border: '1px solid #252C35',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#a3e635',
                    color: '#0a0a0a',
                    border: 'none',
                    borderRadius: '3px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;