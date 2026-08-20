import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRight, Heart, Share2, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shayari Dunia - Best Hindi, Punjabi & English Shayari Collection',
  description: 'Welcome to Shayari Dunia. Discover the best top 50 shayaris in Hindi, Punjabi, and English. Read, share, and download beautiful poetry with background images.',
};

export default function Home() {
  const faqs = [
    {
      question: "What languages are available on Shayari Dunia?",
      answer: "We currently offer beautifully curated collections of Shayari in three languages: Hindi, Punjabi, and English. You can easily navigate to your preferred language from our homepage."
    },
    {
      question: "Can I download the Shayaris with images?",
      answer: "Yes! Every single Shayari comes with a high-quality background image. You can use the 'Download' button on any post to instantly save it as an image to your device."
    },
    {
      question: "Are the Shayaris free to share on WhatsApp and Instagram?",
      answer: "Absolutely. We encourage you to share our poetry with your friends and family. You can use our built-in share buttons or simply download the images to post them on your status or stories."
    },
    {
      question: "How often is the collection updated?",
      answer: "We regularly update our 'Best Top 50' lists to ensure you always have fresh, meaningful, and heart-touching content to read and share."
    }
  ];

  return (
    <div>
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Curated with Love</h3>
              <p className="text-gray-500">Only the most meaningful and deepest lines make it to our top collections.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Downloads</h3>
              <p className="text-gray-500">Download any Shayari as a beautiful high-resolution image with one click.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Sharing</h3>
              <p className="text-gray-500">Share your favorite quotes directly to WhatsApp, Instagram, and more.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose your preferred language and dive into a world of emotions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hindi Card */}
            <Link href="/hindi" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-80">
              <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=60" alt="Hindi Shayari" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">Hindi Shayari</h3>
                <p className="text-gray-200 mb-4">Explore the best Top 50 Hindi poetry.</p>
                <div className="flex items-center text-pink-400 font-medium group-hover:text-pink-300">
                  Read Collection <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>
            </Link>

            {/* Punjabi Card */}
            <Link href="/punjabi" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-80">
              <Image src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=60" alt="Punjabi Shayari" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">Punjabi Shayari</h3>
                <p className="text-gray-200 mb-4">Soulful and heart-touching Punjabi lines.</p>
                <div className="flex items-center text-pink-400 font-medium group-hover:text-pink-300">
                  Read Collection <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>
            </Link>

            {/* English Card */}
            <Link href="/english" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-80">
              <Image src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop&q=60" alt="English Shayari" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">English Quotes</h3>
                <p className="text-gray-200 mb-4">Modern and deep English poetry.</p>
                <div className="flex items-center text-pink-400 font-medium group-hover:text-pink-300">
                  Read Collection <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about Shayari Dunia.</p>
          </div>
          
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Shayari Dunia: Your Ultimate Poetry Destination</h2>
          <p>
            In a fast-paced world dominated by quick texts and emojis, the profound beauty of carefully chosen words often gets lost. Welcome to <strong>Shayari Dunia</strong>, a digital sanctuary dedicated to the timeless art of poetry, quotes, and Shayari. We believe that whether you are experiencing the intoxicating heights of love, the crushing weight of heartbreak, the joy of true friendship, or the need for daily motivation, there is a piece of poetry out there that perfectly encapsulates your feelings.
          </p>
          <p>
            Our mission is simple: to provide you with the most extensive, high-quality, and visually stunning collection of Shayari on the internet. We have painstakingly curated thousands of verses across multiple languages to ensure that no matter who you are or what you are going through, you will find words that resonate with your soul.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Multilingual Hub of Emotions</h3>
          <p>
            Emotions do not belong to a single language. That is why Shayari Dunia is proudly multilingual. We currently offer vast collections in three major languages, each with its own unique flavor and cultural depth:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Hindi Shayari:</strong> The heart of our platform. Hindi Shayari carries the rich legacy of Hindustani culture. It is sweet, deeply emotional, and universally understood across the Indian subcontinent. From the romantic ghazals of yesteryears to modern two-liners, our Hindi section has it all.</li>
            <li><strong>Punjabi Shayari:</strong> Known for its raw energy and profound earthiness. Punjabi poetry hits differently. Whether it is the spiritual depth of Sufi verses or the unabashed swag of modern 'attitude' statuses, our Punjabi collection is unmatched in its authenticity.</li>
            <li><strong>English Quotes:</strong> For the global citizen. Our English section features a blend of classic literary quotes and modern micro-poetry. It is perfect for those who seek sharp, impactful, and highly relatable words for their daily social media updates.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meticulously Categorized for Your Convenience</h3>
          <p>
            We understand that when you are looking for a Shayari, you are usually driven by a specific mood or occasion. Scrolling through a random mix of sad and happy quotes can be jarring. Therefore, we have implemented a highly organized category system.
          </p>
          <p>
            Under each language, you will find deeply nested categories such as <em>Love</em>, <em>Sad</em>, <em>Attitude</em>, <em>Dosti (Friendship)</em>, <em>Good Morning</em>, and <em>Festivals</em>. This structure ensures that you spend less time searching and more time enjoying the poetry. Simply use our intuitive dropdown menus to navigate directly to the emotion you wish to explore.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Power of Visual Storytelling</h3>
          <p>
            At Shayari Dunia, we believe that words are only half the experience. The presentation matters just as much. Unlike traditional poetry blogs that present you with walls of plain text, every single Shayari on our platform is a visual masterpiece.
          </p>
          <p>
            We pair our carefully curated verses with high-resolution, aesthetically pleasing background images. We apply the perfect cinematic overlays and typography to ensure maximum readability and impact. The result? A digital card that is ready to be shared with the world. When you download an image from our site, you are downloading a piece of art that will make your Instagram stories, WhatsApp statuses, and Facebook posts stand out from the crowd.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Designed for Seamless Sharing</h3>
          <p>
            Poetry is meant to be shared. It is a tool for connection. Have you ever read a line and immediately thought of someone? We have built our platform to make sharing that line as frictionless as possible.
          </p>
          <p>
            Every Shayari card on our website comes equipped with a suite of interaction tools:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>The Download Button:</strong> Instantly convert the HTML card into a high-quality PNG image and save it to your device. It comes complete with our tasteful watermark, ensuring the art retains its source.</li>
            <li><strong>The Copy Button:</strong> For those times when you just want the text. One click, and the verse is copied to your clipboard, ready to be pasted into a chat or a document.</li>
            <li><strong>The Share Button:</strong> Our smart share button uses native web APIs to open your device's sharing menu. Whether you want to send it via WhatsApp, Telegram, or Twitter, you can do it directly from our page.</li>
          </ol>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Daily Source of Inspiration</h3>
          <p>
            The world can be a stressful place, and sometimes all we need is a few words of encouragement or validation. We encourage you to make Shayari Dunia a part of your daily routine. Bookmark our homepage and visit us every morning to find the perfect quote to start your day.
          </p>
          <p>
            We are constantly updating our databases behind the scenes. Our team of content curators works tirelessly to discover new poets, unearth forgotten classic verses, and monitor the latest trends in digital poetry to ensure our collection is always fresh, relevant, and emotionally resonant.
          </p>
          <p>
            Thank you for visiting Shayari Dunia. We are honored to be your companion on this emotional journey. Dive in, explore the categories, and let the magic of words transform your day!
          </p>
        </div>
      </div>
    </div>
  );
}
