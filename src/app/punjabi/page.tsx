import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Top 50 Punjabi Shayari - Shayari Dunia',
  description: 'Explore the best top 50 Punjabi Shayaris. Read, share and enjoy the most heart-touching Punjabi poetry with beautiful images.',
};

export default function PunjabiPage() {
  const punjabiShayaris = shayariData.filter(s => s.language === 'punjabi');

  const faqs = [
    {
      question: "Why read Punjabi Shayari here?",
      answer: "Punjabi language has a unique sweetness and depth. Our Top 50 Punjabi Shayari collection brings you the most authentic and soulful lines covering love, friendship (yaari), and life lessons."
    },
    {
      question: "Can I use these images for my Instagram story?",
      answer: "Absolutely! You can download any of the Punjabi Shayaris as a high-quality image by clicking the Download icon, and it's perfectly sized for your social media stories and posts."
    },
    {
      question: "Are these shayaris original?",
      answer: "We curate the best and most popular lines from various unknown and legendary poets to give you a handpicked collection of the finest Punjabi poetry."
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header Section */}
      <div className="bg-pink-50 py-16 border-b border-pink-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Best Top 50 Punjabi Shayari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the soulful depth of Punjabi literature. From strong attitude statuses to deeply emotional romantic lines, our top 50 Punjabi collection is crafted just for you. Read, share, and connect with your roots!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shayari Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {punjabiShayaris.map((shayari) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Soulful Journey of Punjabi Shayari</h2>
          <p>
            Punjabi Shayari is deeply rooted in the cultural and agricultural heartland of Punjab. Known for its raw emotion, directness, and profound philosophical insights, Punjabi poetry holds a special place in the hearts of millions across the globe. From the mystic verses of Sufi saints like Baba Farid, Bulleh Shah, and Waris Shah to the modern romantic and attitude-filled lines shared on social media, the evolution of Punjabi Shayari is a fascinating journey through time.
          </p>
          <p>
            Unlike other forms of poetry which often rely on complex metaphors, Punjabi Shayari is known for its earthy simplicity. It speaks the language of the common man—the farmer in the field, the lover waiting in the village square, and the warrior preparing for battle. This unpretentious nature makes it incredibly relatable and universally appealing. When you read a piece of Punjabi poetry, you do not just understand the words; you feel the soil, the culture, and the heartbeat of Punjab.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Themes Dominating Punjabi Shayari</h3>
          <p>
            The landscape of Punjabi Shayari is vast, covering a multitude of emotions and life situations. Here are the core themes that resonate most with our readers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Love and Longing (Ishq/Pyar):</strong> Rooted in famous tragic romances like Heer-Ranja and Sohni-Mahiwal, Punjabi love shayari is intensely passionate. It speaks of a love that transcends societal boundaries and even life itself.</li>
            <li><strong>Friendship (Yaari/Dosti):</strong> In Punjabi culture, friendship is often elevated above all other relationships. Shayari about <em>Yaari</em> celebrates loyalty, sacrifice, and the unbreakable bond between true friends. It is one of the most shared categories on our platform.</li>
            <li><strong>Attitude (Tohar/Tashan):</strong> Punjabis are known for their pride, bravery, and distinctive swagger. Attitude shayari perfectly captures this spirit, offering bold, confident, and sometimes boastful lines that are perfect for making a statement.</li>
            <li><strong>Sadness and Betrayal (Dard):</strong> The pain of separation (Hijr) and the agony of betrayal are captured with heart-wrenching honesty in Punjabi sad shayari. It provides an emotional outlet for those navigating the turbulent waters of heartbreak.</li>
            <li><strong>Spirituality and Life (Sufiana/Zindagi):</strong> Drawing heavily from its Sufi roots, this category delves into the meaning of life, the temporary nature of the material world, and the ultimate quest for divine love and inner peace.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Punjabi Shayari Resonates Globally</h3>
          <p>
            The Punjabi diaspora is spread across the world, from Canada and the UK to Australia and the USA. For many expatriates, Punjabi Shayari serves as a powerful umbilical cord connecting them to their motherland. It evokes a strong sense of nostalgia—reminding them of the mustard fields, the village fairs, and the warmth of their ancestral homes.
          </p>
          <p>
            Moreover, the explosive popularity of Punjabi music globally has brought Punjabi language and poetry to the forefront. Many non-Punjabi speakers are drawn to the rhythm, cadence, and emotion of the language. Shayari acts as a bridge, allowing them to understand and appreciate the cultural nuances that make Punjabi music so captivating.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Impact of Social Media</h3>
          <p>
            The digital age has breathed new life into Punjabi Shayari. Platforms like Instagram, TikTok, and WhatsApp have made it easier than ever to share these poetic gems. Short, impactful lines paired with aesthetic images or moving background music have become the preferred mode of self-expression for the youth.
          </p>
          <p>
            At Shayari Dunia, we understand this digital shift. That is why every Punjabi shayari in our collection is presented as a beautifully designed visual card. We have optimized these images for instant sharing. When you find a verse that perfectly captures your current mood, you don't have to just copy the text. You can download the high-resolution image and post it directly to your stories, ensuring that your message stands out in a crowded feed.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Connect with Our Collection</h3>
          <p>
            Our dedicated Punjabi section is a treasure trove of emotions waiting to be explored. To get the most out of Shayari Dunia, we recommend the following:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Navigate by Emotion:</strong> Use our top menu to filter shayaris based on your current emotional state. Whether you need a motivational quote to start your day or a deeply romantic line for your partner, our categorized lists make it easy.</li>
            <li><strong>Share the Love:</strong> Poetry is meant to be shared. If a particular line moves you, use our built-in share buttons to send it to someone who might need to read those exact words today.</li>
            <li><strong>Daily Inspiration:</strong> Make it a habit to visit our platform daily. We constantly update our database with fresh content, ensuring that you always have access to the latest and greatest in Punjabi poetry.</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Preserving a Rich Heritage</h3>
          <p>
            By reading, sharing, and engaging with Punjabi Shayari, you are doing more than just updating your social media status; you are helping to preserve and propagate a rich linguistic and cultural heritage. You are keeping the words of the great poets alive and encouraging a new generation of writers to express themselves in their mother tongue.
          </p>
          <p>
            We are incredibly proud to curate this collection for you. Shayari Dunia is committed to providing a platform where the beauty of the Punjabi language can shine brightly on the global stage. We invite you to lose yourself in the rhythm of the words, to feel the depth of the emotions, and to make our collection a part of your daily life.
          </p>
          <p>
            Enjoy the journey through the world of Punjabi Shayari. May you find the perfect words for every moment of your life!
          </p>
        </div>
      </div>
    </div>
  );
}
