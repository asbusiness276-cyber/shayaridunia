import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';
import shayariData from '@/data/shayaris.json';
import ShayariCard from '@/components/ShayariCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shayari Dunia - Best Hindi, Punjabi & English Shayari Collection',
  description: 'Explore our vast collection of heart touching shayaris, quotes, and status messages in Hindi, Punjabi, and English.',
};

export default function Home() {
  const faqs = [
    {
      question: "Are the shayaris free to use?",
      answer: "Yes! All shayaris and quotes on our website are completely free to read, download, and share on your social media."
    },
    {
      question: "How do I download a shayari image?",
      answer: "Simply click the 'Download' button on any shayari card, and it will automatically generate and save a high-quality image to your device."
    },
    {
      question: "Do you update the collection regularly?",
      answer: "Absolutely. Our team curates and adds new Hindi, Punjabi, and English poetry to our database on a regular basis."
    }
  ];

  // Get a mix of latest shayaris from different languages
  const latestShayaris = [
    ...shayariData.filter(s => s.language === 'hindi').slice(0, 3),
    ...shayariData.filter(s => s.language === 'punjabi').slice(0, 3),
    ...shayariData.filter(s => s.language === 'english').slice(0, 3)
  ];

  return (
    <div>
      
      {/* Vibrant Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        
        <div className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-600 font-bold tracking-wider uppercase text-xs mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" /> SHAYARI • FEELINGS • WORDS
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
            कुछ एहसास <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 italic drop-shadow-sm">लफ़्ज़ों से बड़े होते हैं।</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            जो बात दिल में रह जाती है, उसे शायरी कह देती है। अपने mood की शायरी पढ़ें, copy करें और अपनों तक पहुँचाएँ।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/hindi" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-xl hover:shadow-pink-500/40 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1">
              Explore Hindi Shayari
            </Link>
            <Link href="/punjabi" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-purple-700 bg-white border-2 border-purple-100 hover:border-purple-300 shadow-md transition-all duration-300 w-full sm:w-auto">
              Read Punjabi Poetry
            </Link>
          </div>
        </div>
      </div>

      {/* Quote of the Day Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10 -mt-6">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-purple-500/10">
          <span className="text-pink-600 text-sm font-bold uppercase tracking-widest mb-6 block">TODAY'S PICK ♡</span>
          <blockquote className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            "कभी-कभी खामोशी भी<br />सबसे खूबसूरत शायरी होती है।"
          </blockquote>
          <cite className="text-gray-500 font-bold uppercase tracking-widest block">— Shayari Dunia</cite>
        </div>
      </div>

      {/* Colorful Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">EXPLORE MOODS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">आज दिल किस mood में है?</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {[
            { id: 'love', name: 'Love Shayari', icon: '♡', hindi: 'मोहब्बत के एहसास', bg: 'bg-gradient-to-br from-rose-400 to-red-500', shadow: 'shadow-rose-500/30' },
            { id: 'sad', name: 'Sad Shayari', icon: '☾', hindi: 'दर्द जो कहा नहीं', bg: 'bg-gradient-to-br from-blue-400 to-indigo-500', shadow: 'shadow-blue-500/30' },
            { id: 'attitude', name: 'Attitude', icon: '✦', hindi: 'अपना अंदाज़', bg: 'bg-gradient-to-br from-amber-400 to-orange-500', shadow: 'shadow-amber-500/30' },
            { id: 'dosti', name: 'Dosti Shayari', icon: '∞', hindi: 'यारों के नाम', bg: 'bg-gradient-to-br from-emerald-400 to-teal-500', shadow: 'shadow-emerald-500/30' },
            { id: 'morning', name: 'Good Morning', icon: '☀', hindi: 'नई शुरुआत', bg: 'bg-gradient-to-br from-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/30' },
            { id: 'festival', name: 'Festivals', icon: '✨', hindi: 'खुशियों के पल', bg: 'bg-gradient-to-br from-fuchsia-400 to-purple-500', shadow: 'shadow-fuchsia-500/30' }
          ].map((cat) => (
            <Link 
              key={cat.id} 
              href={`/hindi/category/${cat.id}`}
              className={`group flex flex-col items-center justify-center p-6 rounded-3xl ${cat.bg} text-white shadow-lg ${cat.shadow} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 drop-shadow-md">{cat.icon}</span>
              <span className="font-extrabold mb-1 text-center text-sm md:text-base drop-shadow-sm">{cat.name}</span>
              <span className="text-xs text-white/80 text-center font-medium">{cat.hindi}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Shayaris Grid (Making it Bhara Bhara) */}
      <div className="bg-gray-900 py-24 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636918-9f1d0ca8066f?q=80&w=2000&auto=format&fit=crop')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-pink-400 font-bold tracking-wider uppercase text-sm mb-2 block">FRESH DROPS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Latest Additions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Browse our newest and most trending shayaris across all languages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestShayaris.map((shayari) => (
              <ShayariCard key={shayari.id} shayari={shayari} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/hindi" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300">
              View All 900+ Shayaris
            </Link>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/hindi" className="group relative h-72 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-extrabold text-white mb-2">Hindi Shayari</h3>
              <p className="text-gray-300 mb-4 font-medium">Explore the depth of Hindustani emotions.</p>
              <div className="inline-flex items-center text-pink-400 font-bold group-hover:text-pink-300">
                Read Collection <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </div>
          </Link>
          
          <Link href="/punjabi" className="group relative h-72 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605703819853-29a8a7ebdfaf?auto=format&fit=crop&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-extrabold text-white mb-2">Punjabi Shayari</h3>
              <p className="text-gray-300 mb-4 font-medium">Raw, earthy, and profound Punjabi verses.</p>
              <div className="inline-flex items-center text-pink-400 font-bold group-hover:text-pink-300">
                Read Collection <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/english" className="group relative h-72 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-extrabold text-white mb-2">English Quotes</h3>
              <p className="text-gray-300 mb-4 font-medium">Modern and deep English poetry.</p>
              <div className="inline-flex items-center text-pink-400 font-bold group-hover:text-pink-300">
                Read Collection <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white/50 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extended SEO Content Block */}
        <div className="max-w-4xl mx-auto pt-24 mt-24 border-t-2 border-pink-100 prose prose-lg prose-pink text-gray-700 px-4 sm:px-6 lg:px-8">
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
