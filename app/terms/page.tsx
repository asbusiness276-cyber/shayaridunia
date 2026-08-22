import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-12" style={{maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Terms & Conditions</h1>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6" style={{lineHeight: 1.8}}>
            <p><strong>Last Updated: August 2026</strong></p>
            <p style={{marginTop: '1.5rem'}}>
              Welcome to Shayari Dunia! By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Shayari Dunia's website if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>License</h2>
            <p>
              Unless otherwise stated, Shayari Dunia and/or its licensors own the intellectual property rights for all material on Shayari Dunia. All intellectual property rights are reserved. You may view and/or print pages from https://shayaridunia.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>User Content</h2>
            <p>
              The shayaris and quotes provided on this website are collected from various public domains and user submissions. We do not claim absolute copyright over the textual quotes unless explicitly stated. However, the design, layout, graphics, and compilation of the content on this website are the property of Shayari Dunia.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Acceptable Use</h2>
            <p>
              You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2" style={{paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
              <li>Republish our website's structural code or automated scraping without permission.</li>
              <li>Sell, rent or sub-license material from the website.</li>
              <li>Reproduce, duplicate or copy the website's design.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We will not be liable for any loss or damage of any nature.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
