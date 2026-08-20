export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Contact Us</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600 mb-6">
            We would love to hear from you! If you have any suggestions, want to submit your own Shayari, or have any business inquiries, please reach out to us at our official email:
          </p>
          <a 
            href="mailto:asbusiness276@gmail.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 shadow-sm transition-all hover:scale-105"
          >
            asbusiness276@gmail.com
          </a>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-sm text-gray-500">Or drop us a message below</span>
          </div>
        </div>

        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-3 border" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-3 border" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-3 border" placeholder="Your message here..."></textarea>
          </div>
          <button type="button" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">
            Send Message
          </button>
        </form>
      </div>
      
      {/* Extended SEO Content Block */}
      <div className="mt-20 pt-16 border-t border-gray-100 prose prose-lg prose-pink text-gray-700 mx-auto">
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
          When you click that 'Send Message' button or drop an email to asbusiness276@gmail.com, your message doesn't disappear into a digital black hole. It goes directly into our primary inbox, which is monitored daily by our core team members.
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
