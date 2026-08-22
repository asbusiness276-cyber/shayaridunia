import Link from 'next/link';
import { SiteHeader, SiteFooter } from '../components/SiteHeader';

export const metadata = {
  title: 'Blog & Articles | Shayari Dunia',
  description: 'Read deep articles about the history of poetry, the meaning behind famous shayaris, and tips on expressing emotions through words.',
};

const posts = [
  {
    slug: 'why-hindi-shayari-touches-the-heart',
    title: 'Why Hindi Shayari Always Touches the Heart',
    excerpt: 'Explore the deep cultural roots of Hindi poetry and why it remains the best way to express complex emotions like love, sorrow, and motivation.',
    date: 'August 22, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'punjabi-status-evolution',
    title: 'The Evolution of Punjabi Status on Social Media',
    excerpt: 'From WhatsApp groups to Instagram reels, how Punjabi attitude and friendship status updates have taken over the internet.',
    date: 'August 20, 2026',
    readTime: '3 min read',
  },
];

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>The Shayari Dunia Blog</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '3rem' }}>
          Thoughts, histories, and deep dives into the world of words.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.map(post => (
            <article key={post.slug} style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Link href={`/blog/${post.slug}`} style={{ color: '#000', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#444', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ color: '#ff2a5f', fontWeight: 500, textDecoration: 'none' }}>
                Read full article →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
