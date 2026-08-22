import { SiteHeader, SiteFooter } from '../components/SiteHeader';
import { CategoryExplorer } from '../components/CategoryExplorer';
import { emotions } from '../../lib/shayari';

export const metadata = {
  title: 'All Categories & Emotions | Shayari Dunia',
  description: 'Explore all shayari, quotes, and status categories sorted by emotions. Find the perfect words for love, sadness, attitude, motivation and more.',
};

export default function CategoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="max-w-4xl mx-auto px-4 py-12" style={{maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h1 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>All Categories</h1>
            <p className="text-gray-600" style={{fontSize: '1.2rem', color: '#666'}}>
              Select an emotion below to explore Shayaris, Statuses, and Quotes in Hindi, Punjabi, and English.
            </p>
          </div>
          <CategoryExplorer emotions={emotions} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
