import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { SiteHeader, SiteFooter } from '../components/SiteHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Blog & Articles | Shayari Dunia',
  description: 'Read deep articles about the history of poetry, the meaning behind famous shayaris, and tips on expressing emotions through words.',
};

export default function BlogIndex() {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  let posts: any[] = [];
  
  if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));
    posts = files.map(file => {
      const content = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const parsed = JSON.parse(content);
      parsed.slug = file.replace('.json', '');
      return parsed;
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: '4rem 1rem', maxWidth: '900px', margin: '0 auto', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>The Shayari Dunia Blog</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '3rem' }}>
          Thoughts, histories, and deep dives into the world of words.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {posts.map(post => (
            <article key={post.slug} style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #eaeaea', paddingBottom: '2rem', alignItems: 'center' }}>
              {post.imageUrl && (
                <div style={{ flex: '0 0 250px' }}>
                  <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              )}
              <div style={{ flex: 1 }}>
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
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <p>New articles are being written! Check back soon.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
