import { notFound } from 'next/navigation';
import { SiteHeader, SiteFooter } from '../../components/SiteHeader';
import Link from 'next/link';

// Mock database for static generation
const postsData = {
  'why-hindi-shayari-touches-the-heart': {
    title: 'Why Hindi Shayari Always Touches the Heart',
    date: 'August 22, 2026',
    readTime: '4 min read',
    content: (
      <>
        <p>Hindi Shayari has a long and incredibly rich history that dates back centuries. From the royal courts of kings to the modern-day WhatsApp status, poetry remains the most profound way to express human emotions.</p>
        
        <h2>The Power of "Lafz" (Words)</h2>
        <p>What makes Shayari unique is its vocabulary. Words like <em>Sukoon</em> (peace), <em>Tadap</em> (yearning), and <em>Justajoo</em> (search) carry a cultural and emotional weight that is very difficult to translate into English. When someone uses these words in a structured, rhyming format, the impact on the listener is immediate and deeply emotional.</p>

        <h2>Why We Curate Original Content</h2>
        <p>In the digital age, a lot of meaning gets lost in copy-pasted text. That is why at <strong>Shayari Dunia</strong>, we focus on providing not just the words, but the deep meaning behind them. We believe that understanding the poetry is the first step to truly feeling it.</p>
        
        <p>Whether you are dealing with a heartbreak, or just want to tell someone how much you love them, a beautifully crafted Hindi shayari does the job perfectly. The next time you share an image from our <Link href="/hindi/love" style={{color: '#ff2a5f'}}>Love Shayari</Link> collection, remember that you are sharing a piece of history and art.</p>
      </>
    ),
  },
  'punjabi-status-evolution': {
    title: 'The Evolution of Punjabi Status on Social Media',
    date: 'August 20, 2026',
    readTime: '3 min read',
    content: (
      <>
        <p>If there is one language that perfectly captures both extreme heartbreak and unmatched "swag", it is Punjabi. Over the last decade, Punjabi statuses have evolved from simple text messages to highly stylized video reels and image cards.</p>
        
        <h2>The Era of "Attitude"</h2>
        <p>The concept of <em>Taur</em> or Attitude is deeply embedded in Punjabi pop culture. It is about self-respect, loyalty in friendships (Yaari), and standing tall during difficult times. This is why our <Link href="/punjabi/attitude" style={{color: '#ff2a5f'}}>Punjabi Attitude Status</Link> collection is one of our most popular sections.</p>

        <h2>From Text to Visuals</h2>
        <p>Today, a status is incomplete without a visual element. A good quote needs a good background to set the mood. That is why every single quote on Shayari Dunia comes with a 1080x1350 image card. It saves you the trouble of finding a background image and using an editing app to write the text.</p>

        <p>The next time you want to show some attitude or express your deep friendship, just head over to our Punjabi collections, click the "Image" button, and let the words do the talking for you!</p>
      </>
    ),
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Fix: Since we can't unwrap the promise in sync generateMetadata easily in this mock,
  // we'll just return a generic title that will be overridden by the page or keep it simple.
  return {
    title: 'Blog Article | Shayari Dunia',
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsData[slug as keyof typeof postsData];
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
        <Link href="/blog" style={{ color: '#ff2a5f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          ← Back to Blog
        </Link>
        
        <article>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111', lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1rem', color: '#666' }}>
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          <div className="blog-content" style={{ fontSize: '1.15rem', color: '#333', lineHeight: 1.8 }}>
            {post.content}
          </div>
        </article>
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content h2 { font-size: 1.8rem; font-weight: bold; margin-top: 2.5rem; margin-bottom: 1rem; color: '#111'; }
        .blog-content em { font-style: italic; color: #555; }
      `}} />
      <SiteFooter />
    </>
  );
}
