import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-12" style={{maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>Contact Us</h1>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6 text-center" style={{lineHeight: 1.8, textAlign: 'center'}}>
            <p>
              We would love to hear from you! Whether you have a question, a suggestion, or a complaint, feel free to reach out to us.
            </p>
            
            <div className="bg-white shadow-md rounded-lg p-8 mt-8 border border-gray-100 max-w-md mx-auto" style={{background: 'white', padding: '2rem', marginTop: '2rem', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '400px', margin: '2rem auto'}}>
              <h2 className="text-2xl font-semibold mb-4 text-primary" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Get In Touch</h2>
              <p className="mb-4">
                <strong>Email:</strong><br />
                <a href="mailto:admin@shayaridunia.com" className="text-blue-600 hover:underline" style={{color: '#ff2a5f', textDecoration: 'none'}}>
                  admin@shayaridunia.com
                </a>
              </p>
              <p style={{marginTop: '1rem'}}>
                We aim to respond to all inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
