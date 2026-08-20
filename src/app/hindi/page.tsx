import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Top 50 Hindi Shayari - Shayari Dunia',
  description: 'Explore the best top 50 Hindi Shayaris. Read, share and enjoy the most heart-touching Hindi poetry with beautiful images.',
};

export default function HindiPage() {
  const hindiShayaris = shayariData.filter(s => s.language === 'hindi');

  const faqs = [
    {
      question: "What types of Hindi Shayari are available here?",
      answer: "Our Top 50 Hindi Shayari collection covers a wide range of emotions including love, sadness, attitude, friendship, and deep life lessons. We carefully select each shayari to ensure it touches your heart."
    },
    {
      question: "Can I download these Hindi Shayaris?",
      answer: "Yes, you can click the Download button on any Shayari card to instantly save a beautiful image version of the poetry to your device, complete with our watermark."
    },
    {
      question: "How do I share these on WhatsApp?",
      answer: "Simply click the Share button on any card. On mobile, it will open your native sharing menu where you can select WhatsApp. On desktop, it will redirect you to WhatsApp Web to share the link."
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header Section */}
      <div className="bg-pink-50 py-16 border-b border-pink-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Best Top 50 Hindi Shayari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the ultimate collection of Hindi poetry. Whether you are looking for deep words to express your love, or meaningful quotes about life, you will find the perfect Hindi Shayari here. Read, share, and download your favorites!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shayari Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {hindiShayaris.map((shayari) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Rich History and Cultural Significance of Hindi Shayari</h2>
          <p>
            Hindi Shayari is not just a form of poetry; it is an emotion, a tradition, and an integral part of the cultural fabric of India. For centuries, poets and writers have used this beautiful medium to express complex human emotions—love, heartbreak, joy, sorrow, and philosophical musings. Whether it is a few rhyming lines shared between friends or deep verses recited in grand <em>Mushairas</em> (poetic symposia), Hindi Shayari has a unique way of touching the soul.
          </p>
          <p>
            The roots of Hindi Shayari can be traced back to the rich confluence of Hindi, Urdu, and Persian languages. Historically, poetry was the primary medium of storytelling and expressing devotion. Over time, as languages evolved and cultures intermingled, a distinct form of expression emerged. It combined the sweetness of Hindi vocabulary with the structural elegance of Urdu Ghazals and Nazms. Today, what we call Hindi Shayari is often a beautiful blend of Hindustani—the language spoken and understood by the masses across the subcontinent.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Do People Love Hindi Shayari?</h3>
          <p>
            The enduring popularity of Hindi Shayari lies in its relatability. Human beings are emotional creatures, and often, we struggle to find the right words to articulate what we are feeling. Shayari bridges this gap. When someone is experiencing the euphoric highs of first love, a simple <em>Love Shayari</em> can perfectly encapsulate their joy. Conversely, when going through the agonizing pain of a breakup, a <em>Sad Shayari</em> provides solace, reminding the reader that they are not alone in their suffering.
          </p>
          <p>
            Furthermore, Shayari is incredibly concise. In just two lines (a <em>Sher</em>), a poet can convey a message that might take pages to explain in prose. This brevity makes it perfect for the modern digital age. Today, people use Hindi Shayari extensively as WhatsApp statuses, Instagram captions, and Facebook posts. It allows them to express their mood or share a piece of wisdom instantly with their social circle.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Different Themes in Hindi Shayari</h3>
          <p>
            The versatility of Hindi Shayari is vast. It covers almost every aspect of human life. Here are some of the most popular themes that you will find in our extensive collection:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Love (Pyar/Mohabbat):</strong> The most universally celebrated theme. Love shayari captures the magic of romance, the beauty of the beloved, and the longing of separation.</li>
            <li><strong>Sadness (Dard/Bewafai):</strong> Life is not always a bed of roses. Sad shayari gives a voice to heartbreak, betrayal, and the deep sorrow of losing someone special.</li>
            <li><strong>Friendship (Dosti/Yaari):</strong> Celebrating the unbreakable bond between friends. Dosti shayari is shared widely to express gratitude and love for those chosen family members.</li>
            <li><strong>Attitude (Tashan):</strong> For those who live life on their own terms. Attitude shayari is bold, confident, and often used to make a strong statement about one's personality.</li>
            <li><strong>Motivation (Zindagi/Prerna):</strong> Life can be challenging, and motivational shayari provides that much-needed push. It talks about struggle, resilience, and the ultimate triumph of the human spirit.</li>
            <li><strong>Festivals and Greetings:</strong> From Diwali and Holi to Good Morning and Good Night wishes, shayari adds a personalized and poetic touch to our daily and festive greetings.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Evolution of Shayari in the Digital Era</h3>
          <p>
            Before the advent of the internet, finding good Shayari meant buying books of famous poets like Mirza Ghalib, Rahat Indori, or Harivansh Rai Bachchan, or attending live poetry events. While those mediums still hold immense value, the digital era has democratized poetry. Websites like Shayari Dunia have made it incredibly easy for anyone, anywhere, to access thousands of high-quality shayaris instantly.
          </p>
          <p>
            Moreover, the presentation has changed. It is no longer just text on a page. Today, Shayari is highly visual. As you can see in our collection, each piece of poetry is paired with a stunning, high-resolution background image. This visual element enhances the emotional impact of the words. When you download and share a Shayari card from our website, you are sharing a piece of digital art.
          </p>
          <p>
            Social media platforms have further accelerated the spread of Hindi Shayari. A well-written verse can go viral in a matter of hours, touching millions of hearts. It has also given a platform to amateur poets to share their work with the world. The barrier to entry has been lowered, leading to a massive explosion of creative expression.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use Shayari Dunia to Express Yourself</h3>
          <p>
            We have built Shayari Dunia with user experience as our top priority. We know that when you come looking for a shayari, you are looking for a specific emotion. That is why our collection is meticulously categorized. If you are feeling romantic, head over to our Love section. If you want to post a strong WhatsApp status, check out the Attitude section.
          </p>
          <p>
            Here are a few tips on how to make the most of our website:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Explore the Categories:</strong> Don't just stick to the homepage. Dive deep into the specific categories under the Hindi menu to find exactly what you need.</li>
            <li><strong>Use the Download Feature:</strong> Found a shayari you love? Don't just take a screenshot. Click the Download button to get a high-quality, perfectly cropped PNG image that will look fantastic on your Instagram story or WhatsApp status.</li>
            <li><strong>Copy and Paste:</strong> Sometimes you just want the text to send in a quick message or use as a caption. Use the Copy button to instantly copy the text to your clipboard.</li>
            <li><strong>Share Directly:</strong> Use our native Share button to instantly send a deep quote to a friend or loved one. Sometimes, receiving a beautiful shayari can completely turn someone's day around.</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Timeless Magic of Words</h3>
          <p>
            In a world that is becoming increasingly fast-paced and transactional, poetry reminds us of our shared humanity. Hindi Shayari, with its deep cultural roots and modern digital avatar, continues to be a powerful medium of connection. It teaches us empathy, it helps us heal, and it allows us to celebrate the beauty of life in all its complexities.
          </p>
          <p>
            We invite you to immerse yourself in our collection. Take your time, read the lines, absorb the meaning, and let the words resonate with your soul. Bookmark this page, because we are constantly updating our database with fresh, unique, and heart-touching shayaris. Whether you are a lifelong lover of poetry or someone just looking for the perfect words for an occasion, Shayari Dunia is your ultimate companion.
          </p>
          <p>
            Thank you for being a part of our community. Keep reading, keep sharing, and keep the beautiful tradition of Hindi Shayari alive!
          </p>
        </div>
      </div>
    </div>
  );
}
