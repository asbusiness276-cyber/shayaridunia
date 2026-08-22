import { SiteHeader, SiteFooter } from '../components/SiteHeader';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-16" style={{maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem'}}>
          
          <h1 className="text-5xl font-extrabold text-center mb-6" style={{fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800}}>About Shayari Dunia</h1>
          <p className="text-center text-gray-500 mb-12" style={{textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '3rem'}}>
            Har Ehsaas, Khoobsurat Alfaaz — Where emotions find their true voice.
          </p>

          <div className="prose prose-lg mx-auto text-gray-700 space-y-8" style={{lineHeight: 1.8, fontSize: '1.1rem'}}>
            
            <section style={{marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', color: '#111'}}>Our Story</h2>
              <p>
                Welcome to <strong>Shayari Dunia</strong>, your ultimate digital sanctuary for expressing emotions through the beautiful art of words. We realized that in today's fast-paced digital world, people often struggle to find the exact words to describe their feelings. Whether it's the joy of falling in love, the pain of a heartbreak, or the daily motivation needed to keep pushing forward, we all need words that resonate with our soul.
              </p>
              <p style={{marginTop: '1rem'}}>
                That realization gave birth to Shayari Dunia. A platform dedicated to curating, writing, and designing the most touching poetry, status updates, and quotes on the internet.
              </p>
            </section>

            <section style={{marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', color: '#111'}}>What We Offer</h2>
              <p>
                We proudly celebrate linguistic diversity by offering a massive, handpicked collection across three major languages:
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem'}}>
                <div style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ff2a5f'}}>
                  <h3 style={{fontSize: '1.4rem', margin: '0 0 0.5rem 0'}}>Hindi (हिन्दी) Shayari</h3>
                  <p style={{margin: 0}}>The soulful language of deep emotions and classic literature. From classical Mirza Ghalib style romance to modern-day two-liners, our Hindi collection captures the essence of Desi romance and heartbreak.</p>
                </div>
                <div style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ff2a5f'}}>
                  <h3 style={{fontSize: '1.4rem', margin: '0 0 0.5rem 0'}}>Punjabi (ਪੰਜਾਬੀ) Status</h3>
                  <p style={{margin: 0}}>The vibrant and energetic language of friendship, swag, and pure love. Whether you want to flaunt your 'Attitude' or express true 'Yaari', our authentic Gurmukhi script quotes are perfect for WhatsApp statuses.</p>
                </div>
                <div style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ff2a5f'}}>
                  <h3 style={{fontSize: '1.4rem', margin: '0 0 0.5rem 0'}}>English Quotes</h3>
                  <p style={{margin: 0}}>The modern way to express your aesthetic feelings instantly. For the Gen-Z and millennials who love minimalistic aesthetics, deep midnight thoughts, and motivational one-liners.</p>
                </div>
              </div>
            </section>

            <section style={{marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', color: '#111'}}>Why Choose Us?</h2>
              <ul style={{paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li><strong>100% Original Quality:</strong> We don't just copy-paste. We curate the best lines and ensure they are grammatically correct and meaningful.</li>
                <li><strong>Share-Ready Images:</strong> Every single quote on our website comes with a beautifully designed, high-resolution image card (4:5 ratio) that is instantly ready to be shared on Instagram or WhatsApp.</li>
                <li><strong>Clear Meanings:</strong> Shayari can sometimes use difficult words. We provide simple, clear meanings below complex shayaris so you truly understand what you are sharing.</li>
                <li><strong>Fast & Ad-Friendly:</strong> A seamless, lightning-fast browsing experience designed with love.</li>
              </ul>
            </section>

            <section style={{marginBottom: '3rem', textAlign: 'center', background: '#fff0f3', padding: '3rem', borderRadius: '16px'}}>
              <h2 style={{fontSize: '2rem', margin: '0 0 1rem 0', color: '#ff2a5f'}}>Join Our Community</h2>
              <p style={{marginBottom: '2rem'}}>
                Thank you for making Shayari Dunia a part of your daily emotional expression. We are constantly updating our collections with fresh words every single day. Keep loving, keep sharing, and never let your emotions go unspoken!
              </p>
              <Link href="/categories" style={{background: '#ff2a5f', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'}}>
                Explore Collections Now
              </Link>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
