import { useState } from 'react';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [contactStatus, setContactStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xdkprlaw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setNewsletterStatus('success');
        setEmail('');
        setTimeout(() => setNewsletterStatus(''), 4000);
      } else {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus(''), 4000);
      }
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 4000);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xdkprlaw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          message,
          _subject: `New contact message from ${name}`,
        }),
      });
      
      if (response.ok) {
        setContactStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setContactStatus(''), 4000);
      } else {
        setContactStatus('error');
        setTimeout(() => setContactStatus(''), 4000);
      }
    } catch (error) {
      setContactStatus('error');
      setTimeout(() => setContactStatus(''), 4000);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              What's <span className="gradient-text">YOUR POD?</span>
            </h1>
            <p className="hero-subtitle">
              Power on Demand. People on Demand. Proof of Doing.
            </p>
            <p className="hero-description">
              AI-powered workflows for creators who want to build, learn, and ship faster.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' })}>
                Join the Community
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Origin Story Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">The Origin Story</h2>
          <div className="story-content">
            <p className="story-text">
              I wasn't a graphic designer. I didn't know Photoshop or Illustrator. 
              But I had an idea and I had AI.
            </p>
            <p className="story-text">
              Using AI tools, I created a t-shirt design that sold. Then it sold again. 
              And again. That simple shirt taught me something powerful: <strong>you don't need 
              to be an expert to create something valuable</strong>.
            </p>
            <p className="story-text">
              "POD" started as Print on Demand, but it evolved into something bigger:
            </p>
            <ul className="pod-meanings">
              <li><strong>Power on Demand</strong> - AI gives you capabilities you never had before</li>
              <li><strong>People on Demand</strong> - Build communities around what you create</li>
              <li><strong>Proof of Doing</strong> - Your work speaks louder than credentials</li>
            </ul>
            <p className="story-text">
              Now I help creators discover their own POD - teaching AI workflows that turn 
              ideas into reality, no matter your background.
            </p>
          </div>
        </div>
      </section>

      {/* POD Experiments Section */}
      <section id="experiments" className="section experiments">
        <div className="container">
          <h2 className="section-title">POD Experiments</h2>
          <p className="section-description">
            Real projects. Real results. Real learning.
          </p>
          <div className="experiments-grid">
            <div className="experiment-card">
              <h3>AI-Generated T-Shirt Designs</h3>
              <p>
                From zero design skills to selling shirts with AI-powered creativity. 
                The experiment that started it all.
              </p>
            </div>
            <div className="experiment-card">
              <h3>AI Workflow Templates</h3>
              <p>
                Building reusable processes that help creators ship faster and smarter 
                using AI automation.
              </p>
            </div>
            <div className="experiment-card">
              <h3>Community Building</h3>
              <p>
                Growing a community of creators who believe in learning by doing and 
                sharing the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section events">
        <div className="container">
          <h2 className="section-title">Events & Workshops</h2>
          <div className="events-list">
            <div className="event-card">
              <div className="event-date">November 2024</div>
              <h3>Cross Border Summit - Chiang Mai</h3>
              <p>Speaking on AI workflows for creators and print on demand success strategies</p>
            </div>
            <div className="event-card">
              <div className="event-date">Featured</div>
              <h3>GFA Nexus Interview</h3>
              <p>Philippines Chapter Leader sharing insights on AI and creator economy</p>
            </div>
            <div className="event-card">
              <div className="event-date">Ongoing</div>
              <h3>AI Workshops</h3>
              <p>Teaching creators how to leverage AI for design, content, and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Creators Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Napoleon's approach to AI makes it accessible. You don't need to be 
                technical - just willing to experiment."
              </p>
              <p className="testimonial-author">- Creator Community Member</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The POD philosophy changed how I think about my work. It's not about 
                credentials, it's about what you can create."
              </p>
              <p className="testimonial-author">- Workshop Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="section-title">Join the POD</h2>
            <p className="newsletter-description">
              Get AI workflows, creator insights, and experiment updates delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary" disabled={newsletterStatus === 'sending'}>
                {newsletterStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}
              </button>
              {newsletterStatus === 'success' && <p className="status-success">✓ Check your email!</p>}
              {newsletterStatus === 'error' && <p className="status-error">✗ Something went wrong. Try again!</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Questions? Collaboration ideas? Let's connect.
          </p>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="contact-textarea"
              rows="5"
            />
            <button type="submit" className="btn-primary" disabled={contactStatus === 'sending'}>
              {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {contactStatus === 'success' && <p className="status-success">✓ Message sent! I'll get back to you soon.</p>}
            {contactStatus === 'error' && <p className="status-error">✗ Something went wrong. Try again!</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
