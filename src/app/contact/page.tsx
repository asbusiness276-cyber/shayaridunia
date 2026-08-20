import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Contact Us</h1>
      
      <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-pink-100 text-center max-w-2xl mx-auto mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="relative">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-50 text-pink-600 mb-8 shadow-sm border border-pink-100">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Drop us an Email</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            For any content suggestions, poetry submissions, technical support, or business inquiries, feel free to reach out to us directly.
          </p>
          <a 
            href="mailto:asbusiness276@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            <Mail className="w-6 h-6 mr-3" />
            asbusiness276@gmail.com
          </a>
        </div>
      </div>
      
      {/* Extended SEO Content Block */}
      <div className="pt-16 border-t-2 border-pink-50 prose prose-lg prose-pink text-gray-700 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Connecting Through the Power of Words</h2>
        <p>
          At Shayari Dunia, we believe that communication is the foundation of every strong relationship. Whether you are trying to express your deepest love, convey your sorrow, or simply make someone smile, the right words can make all the difference. This philosophy is not just something we apply to our poetry collection; it is the core principle of how we operate our platform and interact with our community.
        </p>
        <p>
          We built this Contact page because we genuinely want to hear from you. The digital landscape can often feel cold and impersonal, but we are striving to build a warm, welcoming community of poetry lovers. Your feedback, suggestions, and even your criticisms are the fuel that helps us improve and grow. We view every message we receive not as a ticket to be resolved, but as a conversation to be had.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Reach Out to Us?</h3>
        <p>
          There are many reasons you might want to get in touch with the team at Shayari Dunia. We have designed our contact process to be as straightforward and accessible as possible. Here are some of the most common reasons our users reach out:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Content Suggestions:</strong> Do you have a favorite poet whose work you can't find on our site? Is there a specific niche category of Shayari you would like us to add? Let us know! We are constantly expanding our database based on user requests.</li>
          <li><strong>Poetry Submissions:</strong> We know that our community is full of talented writers. If you have penned a beautiful Hindi, Punjabi, or English quote and want to share it with the world, send it our way. If it meets our quality standards, we will design a custom card for it and feature it on our platform.</li>
          <li><strong>Technical Support:</strong> While we pride ourselves on having a fast, bug-free website, technology can sometimes be unpredictable. If you are having trouble downloading an image, if a page is loading slowly, or if a button isn't working, please report it. Our technical team will jump on it immediately.</li>
          <li><strong>Business Inquiries:</strong> If you are a brand, a fellow blogger, or a media agency looking for collaboration opportunities, sponsorships, or advertising placements, please use the official business email provided above. We are always open to mutually beneficial partnerships.</li>
          <li><strong>Copyright Concerns:</strong> We respect intellectual property rights. While we strive to ensure all content on our site is either original, public domain, or properly attributed, mistakes can happen. If you believe your copyrighted work is being used without permission, please contact us immediately for swift resolution.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Happens After You Contact Us?</h3>
        <p>
          When you click that email button or drop a message to asbusiness276@gmail.com, your message doesn't disappear into a digital black hole. It goes directly into our primary inbox, which is monitored daily by our core team members.
        </p>
        <p>
          We have a strict internal policy regarding communication. We aim to acknowledge receipt of every legitimate inquiry within 24 hours. Depending on the nature of your message, a full resolution or detailed response may take up to 3-5 business days. For instance, reviewing a poetry submission takes longer than fixing a broken link, as it requires our editorial team to evaluate the emotional resonance and structural quality of the verse.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment to Your Privacy</h3>
        <p>
          We understand that reaching out requires you to share personal information, such as your name and email address. We want to assure you that your data is safe with us. As detailed in our comprehensive Privacy Policy, any information submitted through this contact form is used strictly for the purpose of communicating with you regarding your specific inquiry.
        </p>
        <p>
          We do not harvest emails for spam marketing campaigns. We will not sell your contact details to third-party data brokers. The trust you place in us when you hit 'Send' is something we value immensely, and we will never do anything to compromise that trust.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building a Global Literary Community</h3>
        <p>
          Shayari Dunia is more than just a website; it is an ongoing project to catalog the human experience through poetry. Our servers may be hosted in data centers, but the soul of this platform resides in the interactions we have with readers like you—from the bustling streets of Delhi to the Punjabi diaspora in Toronto, to poetry enthusiasts in London and beyond.
        </p>
        <p>
          Every piece of feedback helps us refine our categories, every submission adds depth to our collection, and every technical report ensures a smoother experience for the next visitor. You are an integral part of this journey.
        </p>
        <p>
          So, do not hesitate. Whether you have a profound thought to share, a business proposition, or just want to say a quick hello and tell us how a particular sad shayari helped you through a tough day, our inbox is always open. We look forward to hearing from you and continuing to grow Shayari Dunia together!
        </p>
      </div>
    </div>
  );
}
