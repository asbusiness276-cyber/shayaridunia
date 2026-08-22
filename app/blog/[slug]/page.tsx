import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { SiteHeader, SiteFooter } from '../../components/SiteHeader';
import Link from 'next/link';

export const dynamicParams = false;

export function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  if (!fs.existsSync(blogsDir)) return [];
  
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));
  return files.map(file => ({
    slug: file.replace('.json', ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  const filePath = path.join(blogsDir, `${slug}.json`);
  
  if (!fs.existsSync(filePath)) return { title: 'Blog | Shayari Dunia' };
  
  const post = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    title: `${post.title} | Shayari Dunia`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogsDir = path.join(process.cwd(), 'data', 'blogs');
  const filePath = path.join(blogsDir, `${slug}.json`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const post = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Get a few random other posts for the "Related" section
  const allFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json') && f !== `${slug}.json`);
  const relatedPosts = allFiles
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)
    .map(file => JSON.parse(fs.readFileSync(path.join(blogsDir, file), 'utf8')));

  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
        
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
          <Link href="/">Home</Link><span>/</span>
          <Link href="/blog">Blog</Link><span>/</span>
          <span>{post.title}</span>
        </nav>
        
        <article>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111', lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '16px', marginBottom: '2rem' }} />
            )}
          </header>
          
          <div className="blog-content" style={{ fontSize: '1.15rem', color: '#333', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Author Profile */}
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '16px', display: 'flex', gap: '2rem', alignItems: 'center', border: '1px solid #eaeaea' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ff2a5f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 'bold', flexShrink: 0 }}>
            S
          </div>
          <div>
            <p className="eyebrow" style={{ margin: 0, color: '#ff2a5f', fontWeight: 600 }}>Written by</p>
            <h3 style={{ fontSize: '1.5rem', margin: '0.25rem 0', color: '#111' }}>
              <Link href="/author/saahil" style={{ color: 'inherit', textDecoration: 'none' }}>Saahil</Link>
            </h3>
            <p style={{ color: '#555', margin: 0, lineHeight: 1.5 }}>
              Founder of Shayari Dunia. Exploring the depth of words, emotions, and poetry. 
              <br />
              <a href="https://instagram.com/RealSaahilMusic" target="_blank" rel="noopener noreferrer" style={{ color: '#ff2a5f', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '0.5rem' }}>
                @RealSaahilMusic
              </a>
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid #eaeaea' }}>
            <p className="eyebrow">Keep reading</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {relatedPosts.map(related => (
                <div key={related.slug} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {related.imageUrl && (
                    <Link href={`/blog/${related.slug}`}>
                      <img src={related.imageUrl} alt={related.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
                    </Link>
                  )}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', lineHeight: 1.4 }}>
                    <Link href={`/blog/${related.slug}`} style={{ color: '#111', textDecoration: 'none' }}>
                      {related.title}
                    </Link>
                  </h3>
                  <Link href={`/blog/${related.slug}`} style={{ color: '#ff2a5f', fontWeight: 500, textDecoration: 'none' }}>
                    Read article →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content h2 { font-size: 2rem; font-weight: bold; margin-top: 3rem; margin-bottom: 1rem; color: '#111'; }
        .blog-content h3 { font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; color: '#222'; }
        .blog-content em { font-style: italic; color: #555; }
        .blog-content ul { padding-left: 2rem; margin-bottom: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
      `}} />
      <SiteFooter />
    </>
  );
}
