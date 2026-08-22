import { SiteHeader, SiteFooter } from '../../components/SiteHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saahil (Real Saahil Music) - Author & Founder | Shayari Dunia',
  description: 'Learn about Saahil, the founder of Shayari Dunia and the mind behind Real Saahil Music. Discover his journey from music production to curating the best Hindi and Punjabi poetry.',
  openGraph: {
    title: 'Saahil - Founder of Shayari Dunia',
    description: 'Learn about Saahil, the founder of Shayari Dunia and the mind behind Real Saahil Music.',
    images: ['/icon.jpg'],
  }
};

export default function AuthorPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ff2a5f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '3rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>
            S
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>Saahil</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1.5rem' }}>Founder, Shayari Dunia & Creator, Real Saahil Music</p>
          <a href="https://instagram.com/RealSaahilMusic" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#111', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 600 }}>
            Follow @RealSaahilMusic
          </a>
        </div>

        <article className="author-content" style={{ fontSize: '1.15rem', color: '#333', lineHeight: 1.8 }}>
          <h2>The Voice Behind the Words: Who is Saahil?</h2>
          <p>
            Welcome to my creative universe. I am <strong>Saahil</strong>, the founder and chief curator of <em>Shayari Dunia</em>, and the artist known digitally as <strong>Real Saahil Music</strong>. For as long as I can remember, I have been deeply fascinated by the power of expression—whether that expression takes the form of a melodic beat drop, a strum of a guitar, or the rhythmic flow of a two-line Urdu couplet. 
          </p>
          <p>
            In today's fast-paced digital world, where emotions are often reduced to quick emojis and fleeting snaps, I wanted to build a sanctuary for genuine feeling. Shayari Dunia is not just a website; it is an extension of my artistic soul. It is a place where words hold weight, where a simple Hindi quote can heal a broken heart, and where a powerful Punjabi status can boost your confidence for the entire day.
          </p>

          <h2>From Rhythms to Rhymes: The Connection Between Music and Poetry</h2>
          <p>
            Many people ask me how a music producer and artist transitioned into running a platform dedicated entirely to poetry and quotes. To me, the answer is incredibly simple: <strong>Music and Shayari are the exact same art form.</strong> 
          </p>
          <p>
            When you compose a track under <em>Real Saahil Music</em>, you are looking for a specific rhythm. You arrange the drums, the bass, and the synths in a way that evokes a specific emotion—be it joy, melancholy, or intense motivation. Shayari operates on the exact same principles. The <em>kaafiya</em> (rhyme) and <em>radeef</em> (refrain) in a ghazal provide the beat, while the choice of words—the <em>alfaaz</em>—provide the melody.
          </p>
          <p>
            I realized that the people who listen to emotional music are the exact same people who search for deep, meaningful poetry on the internet. They are looking for words that explain exactly how they feel when their own vocabulary falls short. Building Shayari Dunia was my way of providing the lyrics to the soundtrack of their lives.
          </p>

          <h2>Why I Built Shayari Dunia</h2>
          <p>
            The internet is flooded with websites offering Hindi poetry, status updates, and quotes. However, as a creator who values aesthetics and deep meaning, I found the existing platforms heavily lacking in three major areas:
          </p>
          <ul>
            <li><strong>Context and Meaning:</strong> Deep Urdu and Hindi words are beautiful, but they are often difficult to understand. I wanted a platform that not only provided the quote but also explained its deep underlying meaning in plain English.</li>
            <li><strong>Visual Aesthetics:</strong> A beautiful quote deserves a beautiful canvas. Instead of just plain text that users have to copy-paste into third-party editing apps, I wanted to provide instantly downloadable, high-resolution (1080x1350) images that look perfect on Instagram and WhatsApp.</li>
            <li><strong>Authentic Emotion:</strong> I wanted to curate quotes that actually mean something, moving away from the generic, overused lines and focusing on original, thought-provoking content across Hindi, Punjabi, and English.</li>
          </ul>

          <h2>The Real Saahil Music Philosophy</h2>
          <p>
            Through <strong>Real Saahil Music</strong>, my philosophy has always been about authenticity. In an era of auto-tune and artificial intelligence, the human element—the raw, unfiltered emotion—is what truly connects us. I bring this exact same philosophy to my writing and curation on Shayari Dunia.
          </p>
          <p>
            Whether I am writing an article about the evolution of Punjabi attitude statuses or curating the best romantic lines for couples, my goal is to make sure every single piece of content on this platform is authentic. If a quote doesn't make me feel something personally, it doesn't make it to the website. Period.
          </p>

          <h2>My Favorite Topics to Write About</h2>
          <p>
            While I oversee all the content on Shayari Dunia, there are a few topics that I hold very close to my heart:
          </p>
          <ul>
            <li><strong>Motivational English Quotes:</strong> The hustle is real. Coming from a musical background, I know what it takes to grind day in and day out. Writing and curating motivational content helps me push my own boundaries while inspiring millions of readers.</li>
            <li><strong>Punjabi Yaari (Friendship) Status:</strong> In Punjabi culture, brotherhood and friendship are held above everything else. The slang, the attitude, and the deep loyalty expressed in Punjabi quotes are unmatched globally.</li>
            <li><strong>Deep Heartbreak Shayari:</strong> Pain is universal, and sometimes the only way to heal is to acknowledge it. Some of the most beautiful poetry in human history was born out of profound sadness, and I take great pride in curating lines that help people navigate their lowest moments.</li>
          </ul>

          <h2>The Future of Shayari Dunia</h2>
          <p>
            My vision for Shayari Dunia is massive. We are constantly expanding our collections, adding new emotions, and writing deeper, more insightful blog posts. I want this platform to be the ultimate global encyclopedia for South Asian emotional expression. 
          </p>
          <p>
            We are looking into integrating audio—perhaps bringing the <em>Real Saahil Music</em> touch directly into the Shayari experience with background lofi beats for reading. The possibilities are endless, and we are just getting started.
          </p>

          <h2>Connect With Me</h2>
          <p>
            I love connecting with people who appreciate art, music, and poetry. The best place to reach me, hear my latest musical projects, and follow my daily journey is through my official social media channels.
          </p>
          <p>
            Search for <strong>Real Saahil Music</strong> on Instagram, YouTube, and Spotify. Drop me a message, tell me which quote on Shayari Dunia touched your heart the most, and let's keep the art of expression alive!
          </p>

        </article>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .author-content p { margin-bottom: 1.5rem; }
        .author-content h2 { font-size: 2rem; font-weight: bold; margin-top: 3rem; margin-bottom: 1rem; color: '#111'; border-bottom: 2px solid #ff2a5f; padding-bottom: 0.5rem; display: inline-block; }
        .author-content em { font-style: italic; color: #555; }
        .author-content strong { color: #111; font-weight: bold; }
        .author-content ul { padding-left: 2rem; margin-bottom: 1.5rem; }
        .author-content li { margin-bottom: 1rem; line-height: 1.6; }
      `}} />
      <SiteFooter />
    </>
  );
}
