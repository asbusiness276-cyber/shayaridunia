import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-12" style={{maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>About Shayari Dunia</h1>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6" style={{lineHeight: 1.8}}>
            <p>
              Welcome to <strong>Shayari Dunia</strong>, your ultimate destination for expressing emotions through the beautiful art of words. We believe that sometimes, the feelings in our hearts cannot be expressed in ordinary language. That is when Shayari comes to the rescue.
            </p>
            <p style={{marginTop: '1.5rem'}}>
              Whether you are looking for heart-touching romantic lines, deep sad quotes, inspiring motivational words, or just something to share on your WhatsApp status with a punch of attitude, we have carefully curated collections across three main languages:
            </p>
            <ul className="list-disc pl-6 space-y-2" style={{paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
              <li><strong>Hindi (हिन्दी)</strong> - The soulful language of deep emotions and classic literature.</li>
              <li><strong>Punjabi (ਪੰਜਾਬੀ)</strong> - The vibrant and energetic language of friendship, swag, and pure love.</li>
              <li><strong>English</strong> - The modern way to express your aesthetic feelings and thoughts instantly.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem'}}>Our Mission</h2>
            <p>
              Our mission is simple: to help you find the right words at the right time. We handpick the best shayaris and present them in beautifully designed, easy-to-read cards that you can instantly download or share with your loved ones on social media.
            </p>
            <p style={{marginTop: '1.5rem'}}>
              Thank you for making Shayari Dunia a part of your daily emotional expression. Keep loving, keep sharing!
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
