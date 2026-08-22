import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-12" style={{maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Privacy Policy</h1>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6" style={{lineHeight: 1.8}}>
            <p><strong>Last Updated: August 2026</strong></p>
            <p style={{marginTop: '1.5rem'}}>
              At Shayari Dunia (https://shayaridunia.com), the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information that is received and collected by Shayari Dunia and how it is used.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Log Files</h2>
            <p>
              Like many other Web sites, Shayari Dunia makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Cookies and Web Beacons</h2>
            <p>
              Shayari Dunia does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Google AdSense</h2>
            <p>
              We use third-party advertising companies, such as Google, to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Consent</h2>
            <p>
              By using our website, you hereby consent to our privacy policy and agree to its terms.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
