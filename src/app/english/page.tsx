import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Top 50 English Shayari & Quotes - Shayari Dunia',
  description: 'Explore the best top 50 English Shayaris and quotes. Read, share and enjoy the most heart-touching English poetry with beautiful images.',
};

export default function EnglishPage() {
  const englishShayaris = shayariData.filter(s => s.language === 'english');

  const faqs = [
    {
      question: "Are these traditional Shayaris or Modern Quotes?",
      answer: "Our English collection features a mix of poetic verses, classic literary quotes, and modern emotional poetry that resonates with the traditional 'Shayari' feel, but in the English language."
    },
    {
      question: "Can I copy the text instead of downloading the image?",
      answer: "Yes! Every card has a 'Copy' button. Just click it, and the exact text of the poetry will be copied to your clipboard so you can paste it anywhere."
    },
    {
      question: "Who are the authors of these English quotes?",
      answer: "We include famous lines from well-known authors, philosophers, and contemporary poets, ensuring you get the highest quality of words to match your feelings."
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header Section */}
      <div className="bg-pink-50 py-16 border-b border-pink-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Best Top 50 English Shayari & Quotes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Words have the power to heal, inspire, and connect. Dive into our carefully curated list of the top 50 English quotes and poetry. Perfect for your daily inspiration, aesthetic stories, or sharing with a loved one.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shayari Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {englishShayaris.map((shayari) => (
            <ShayariCard key={shayari.id} shayari={shayari} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Extended SEO Content Block */}
        <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16 mt-16 prose prose-lg prose-pink text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Universal Language of English Poetry and Quotes</h2>
          <p>
            While the term "Shayari" traditionally refers to Urdu or Hindi poetry, the essence of it—capturing deep, complex human emotions in a few rhythmic or impactful lines—is universal. English poetry and modern quotes serve the exact same purpose for a global audience. From the classic sonnets of William Shakespeare and the romantic verses of John Keats to the contemporary, relatable micro-poetry shared on Instagram, the English language has a rich and diverse history of poetic expression.
          </p>
          <p>
            At Shayari Dunia, we have created this dedicated English section because we understand that feelings have no language barrier. Sometimes, an English quote can articulate a thought with a specific kind of modern clarity that resonates perfectly with the younger generation. It bridges the gap between traditional poetic depth and contemporary linguistic style.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Spectrum of English Quotes</h3>
          <p>
            Our collection of English Shayari and quotes is carefully curated to encompass the full spectrum of human experience. Here is a glimpse into the themes we cover:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Love and Romance:</strong> English literature has given us some of the most profound expressions of love. Whether you are looking for a sweet, simple message for your partner or a deep, philosophical quote about the nature of soulmates, you will find it here.</li>
            <li><strong>Heartbreak and Healing:</strong> The pain of losing someone or experiencing betrayal is universal. Our sad quotes provide comfort by articulating the ache that often leaves us speechless, helping in the healing process.</li>
            <li><strong>Motivation and Success:</strong> In a highly competitive world, everyone needs a daily dose of inspiration. We have curated powerful motivational quotes from leaders, thinkers, and writers that will ignite the fire within you and push you towards your goals.</li>
            <li><strong>Friendship and Loyalty:</strong> Celebrate your squad with our collection of friendship quotes. These lines are perfect for wishing a best friend on their birthday or just reminding them how much they mean to you.</li>
            <li><strong>Attitude and Confidence:</strong> Sometimes you need to remind the world of your worth. Our attitude quotes are sharp, witty, and unapologetic, perfect for the modern individual who knows their value.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Rise of Micro-Poetry in the Digital Age</h3>
          <p>
            The way we consume literature has changed dramatically over the last decade. While long-form poetry will always have its place, the digital age has given rise to 'micro-poetry'. These are short, impactful verses, often no longer than a sentence or two, designed to be consumed quickly but remembered for a long time.
          </p>
          <p>
            Writers like Rupi Kaur and Atticus have popularized this format, proving that brevity does not mean a lack of depth. At Shayari Dunia, we embrace this modern format. Our English quotes are designed to be punchy, thought-provoking, and visually appealing. We understand that in the age of scrolling, a quote must immediately capture the reader's attention.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Visuals Matter</h3>
          <p>
            A quote becomes significantly more impactful when paired with the right visual. The aesthetic appeal of an image can set the mood before the words are even read. That is why every single English quote on our platform is superimposed on a carefully selected, high-quality background.
          </p>
          <p>
            Whether it is a moody, dark background for a sad quote or a bright, sunny landscape for a good morning wish, the visual element completes the emotional package. We have optimized these images so they look stunning on any device, making them perfect for your next Instagram post or WhatsApp status update.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Making the Most of Our English Collection</h3>
          <p>
            To truly enjoy and utilize our extensive database of English quotes, keep these tips in mind:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Find Your Category:</strong> Use our intuitive navigation menu to jump straight to the emotion you are currently feeling. It saves time and ensures you find the perfect words quickly.</li>
            <li><strong>Download for Later:</strong> See a quote that you love but don't want to post right now? Use the Download button to save the image directly to your phone's gallery for future use.</li>
            <li><strong>Use the Text:</strong> If you prefer to use the quote as a text caption for your own photo, simply hit the Copy button. The text will be copied to your clipboard, ready to be pasted on any social media platform.</li>
            <li><strong>Share the Inspiration:</strong> Great words are meant to be shared. If a motivational quote fired you up, use the Share button to send it to a friend who might need that same energy today.</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Community of Word Lovers</h3>
          <p>
            Shayari Dunia is more than just a website; it is a community of people who appreciate the power of words. We are committed to scouring the literary world, from classic books to modern blogs, to bring you the finest collection of English poetry and quotes available online.
          </p>
          <p>
            We believe that the right words at the right time can change a person's entire perspective. They can provide comfort in darkness, multiply joy in times of happiness, and give strength during struggles. We invite you to explore our collection, find the quotes that speak to your soul, and make them your own.
          </p>
          <p>
            Thank you for choosing Shayari Dunia as your source of daily inspiration. Keep exploring, keep feeling, and keep sharing the magic of words with the world!
          </p>
        </div>
      </div>
    </div>
  );
}
