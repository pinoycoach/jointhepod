import './Legal.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 2024</p>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Join the POD ("we," "our," or "us") respects your privacy and is committed to 
            protecting your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide when subscribing to our newsletter or contacting us.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Send you newsletters and updates about our content and events</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and trends</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services (such as email marketing platforms and analytics tools) 
            that may collect information about your use of our website. These services have their 
            own privacy policies.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through 
            the contact form on our website.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
