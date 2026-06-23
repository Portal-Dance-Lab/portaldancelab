import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — Portal Dance Lab",
  description: "Privacy policy for Portal Dance Lab, Richmond TX.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">Legal</p>
          <h1 className="page-header-title">Privacy Policy</h1>
          <p className="page-header-sub">Last updated: May 27, 2026</p>
        </div>
      </div>

      <section className="privacy-section">
        <div className="privacy-inner">

          <div className="privacy-block">
            <h2>Overview</h2>
            <p>Portal Dance Lab ("we," "us," or "our") operates portaldancelab.com. This policy explains what information we collect, how we use it, and your rights regarding that information. By using our site, you agree to the practices described here.</p>
          </div>

          <div className="privacy-block">
            <h2>Information We Collect</h2>
            <p>We may collect the following when you interact with our website or services:</p>
            <ul>
              <li><strong>Contact information</strong> — name, email address, and phone number submitted through contact or booking forms.</li>
              <li><strong>Usage data</strong> — pages visited, time on site, browser type, and device information collected automatically via cookies and analytics tools.</li>
              <li><strong>Enrollment and payment data</strong> — collected directly by our registration platform (GymMaster / Jackrabbit Dance) when you sign up for classes or a competitive team. We do not store payment card information on our servers.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries and booking requests</li>
              <li>To send studio updates, class information, and audition announcements (you may opt out at any time)</li>
              <li>To improve our website and understand how visitors use it</li>
              <li>To serve relevant advertising through Google Ads</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </div>

          <div className="privacy-block">
            <h2>Cookies and Tracking</h2>
            <p>Our website uses cookies — small text files stored on your device — to improve your experience and measure site performance. Specifically:</p>
            <ul>
              <li><strong>Google Analytics</strong> — helps us understand site traffic and visitor behavior. Data is anonymized and aggregated. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google's opt-out tool</a>.</li>
              <li><strong>Google Ads</strong> — allows us to show relevant ads to people who have visited our site. Google uses cookies to serve ads based on your prior visits. You can manage ad preferences at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</li>
            </ul>
            <p>You can disable cookies in your browser settings at any time, though some site features may not function properly as a result.</p>
          </div>

          <div className="privacy-block">
            <h2>Third-Party Services</h2>
            <p>We use the following third-party platforms that may collect and process data independently:</p>
            <ul>
              <li><strong>GymMaster / Jackrabbit Dance</strong> — class registration and payment processing. Governed by their own privacy policies.</li>
              <li><strong>Google (Analytics and Ads)</strong> — site analytics and advertising. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
              <li><strong>Loops</strong> — email marketing platform used to send studio announcements and updates.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>Data Retention</h2>
            <p>We retain contact and inquiry data for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your information at any time by contacting us.</p>
          </div>

          <div className="privacy-block">
            <h2>Children's Privacy</h2>
            <p>Many of our students are minors. We do not knowingly collect personal information directly from children under 13. Enrollment and account information for minor students is provided and managed by a parent or guardian.</p>
          </div>

          <div className="privacy-block">
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, contact us at the address below.</p>
          </div>

          <div className="privacy-block">
            <h2>Changes to This Policy</h2>
            <p>We may update this policy from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div className="privacy-block">
            <h2>Contact</h2>
            <p>Questions about this policy? Reach us at:</p>
            <p><strong>Portal Dance Lab</strong><br />
            2441 Precinct Line Dr, Richmond, TX 77406<br />
            <a href="mailto:info@portaldancelab.com">info@portaldancelab.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
