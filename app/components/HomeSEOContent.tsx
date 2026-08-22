import Image from 'next/image';

export function HomeSEOContent() {
  return (
    <section className="seo-content" style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Banner 1: Hero SEO */}
      <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <Image 
          src="/hero-banner.jpg" 
          alt="Beautiful Shayari Banner with Quill and Rose Petals" 
          width={1200} 
          height={600} 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.4))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ff2a5f', marginBottom: '1rem', maxWidth: '600px' }}>
            The Ultimate Destination for True Shayari Lovers
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, maxWidth: '600px' }}>
            Words have the power to heal, to inspire, and to connect hearts. At <strong>Shayari Dunia</strong>, we bring you the most authentic and deeply emotional poetry on the internet. Whether you are looking for heart-touching Hindi romantic lines to dedicate to your partner, or powerful attitude status for your WhatsApp, we have everything organized beautifully for you.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <h3 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '1rem' }}>Expressing Emotions in 3 Languages</h3>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            Every language carries its own unique cultural weight. <strong>Hindi Shayari</strong> offers classic romanticism and deep sorrow through terms like 'Mohabbat' and 'Dard'. 
            Our <strong>Punjabi Status</strong> collection is filled with energetic Yaari (friendship) vibes, pure love, and unmatched swag.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            For those who prefer a modern aesthetic, our <strong>English Quotes</strong> capture everything from midnight thoughts and deep life lessons to daily motivation.
          </p>
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '1rem' }}>High-Quality Downloadable Images</h3>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            We know that a quote is best shared visually. That is why every single shayari on our platform comes with a beautifully designed, high-resolution image card.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            Optimized for a 4:5 ratio, these images are instantly ready to be downloaded and shared on your Instagram feed, Facebook, or WhatsApp status without any cropping or quality loss.
          </p>
        </div>
      </div>

      {/* Banner 2: English Quotes SEO */}
      <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
        <Image 
          src="/quotes-bg.jpg" 
          alt="Cinematic aesthetic background for English Quotes" 
          width={1200} 
          height={600} 
          style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Find Your Daily Motivation
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#eee', lineHeight: 1.8, maxWidth: '800px' }}>
            Sometimes all it takes is one powerful sentence to change the entire trajectory of your day. Browse through our extensive library of life quotes, success mantras, and deep philosophical thoughts designed to give you clarity and peace of mind.
          </p>
        </div>
      </div>

    </section>
  );
}
