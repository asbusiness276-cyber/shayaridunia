import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-16" style={{maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem'}}>
          
          <h1 className="text-5xl font-extrabold text-center mb-6" style={{fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800, textAlign: 'center'}}>Contact Us</h1>
          <p className="text-center text-gray-500 mb-12" style={{textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Have a question, a partnership proposal, or just want to say hi? We'd love to hear from you. Here is how you can reach the Shayari Dunia team.
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
            
            {/* General Inquiries */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>👋</div>
              <h2 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#111'}}>General Inquiries</h2>
              <p style={{color: '#666', marginBottom: '1.5rem', lineHeight: 1.6}}>
                For general questions, feedback on our shayari, or if you found a typo, please drop us an email. We usually reply within 24 hours.
              </p>
              <a href="mailto:admin@shayaridunia.com" style={{color: '#ff2a5f', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'}}>
                admin@shayaridunia.com
              </a>
            </div>

            {/* Business & Partnerships */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💼</div>
              <h2 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#111'}}>Business & Ads</h2>
              <p style={{color: '#666', marginBottom: '1.5rem', lineHeight: 1.6}}>
                Interested in advertising on our website, guest posting, or exploring business collaborations? Reach out to our business team directly.
              </p>
              <a href="mailto:admin@shayaridunia.com?subject=Business%20Inquiry" style={{color: '#ff2a5f', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'}}>
                Partner with us →
              </a>
            </div>

            {/* Submit Content */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>✍️</div>
              <h2 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#111'}}>Submit Shayari</h2>
              <p style={{color: '#666', marginBottom: '1.5rem', lineHeight: 1.6}}>
                Are you a writer? If you have original quotes or shayaris that you want to feature on our platform, send them our way!
              </p>
              <a href="mailto:admin@shayaridunia.com?subject=Content%20Submission" style={{color: '#ff2a5f', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'}}>
                Submit your work →
              </a>
            </div>

          </div>

          {/* FAQ Section */}
          <div style={{marginTop: '4rem'}}>
            <h2 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '2rem'}}>Frequently Asked Questions</h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <details style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer'}}>
                <summary style={{fontWeight: 'bold', fontSize: '1.2rem', outline: 'none'}}>Can I use your images on my Instagram page?</summary>
                <p style={{marginTop: '1rem', color: '#555', lineHeight: 1.6}}>
                  Absolutely! We design our images specifically for social media sharing. You are free to download and post them on Instagram, WhatsApp, or Facebook. We just ask that you do not remove our watermark.
                </p>
              </details>
              
              <details style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer'}}>
                <summary style={{fontWeight: 'bold', fontSize: '1.2rem', outline: 'none'}}>How often is the content updated?</summary>
                <p style={{marginTop: '1rem', color: '#555', lineHeight: 1.6}}>
                  We add new shayaris and quotes every single week. Our team constantly searches for the most relatable and trending thoughts to keep the collections fresh.
                </p>
              </details>
              
              <details style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer'}}>
                <summary style={{fontWeight: 'bold', fontSize: '1.2rem', outline: 'none'}}>Do you have an Android/iOS App?</summary>
                <p style={{marginTop: '1rem', color: '#555', lineHeight: 1.6}}>
                  Currently, we are exclusively a web platform, but our website is fully optimized to work like a native app on your mobile browser! You can easily save our website to your mobile home screen.
                </p>
              </details>
            </div>
          </div>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
