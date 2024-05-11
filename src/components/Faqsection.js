import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is deepfake video detection?',
      answer: ' Deepfake video detection is the process of identifying manipulated or synthesized videos generated using artificial intelligence techniques. It involves analyzing visual and audio cues, such as facial expressions, lip movements, and background consistency, to spot anomalies that indicate a deepfake. Techniques include forensic analysis, machine learning algorithms, and comparing the video against authentic sources.'
    },
    {
      question: 'How can I protect my content from being deepfaked?  ?',
      answer: ' To protect your content from being deepfaked, you can start by using watermarking techniques to embed unique identifiers in your media files. Encrypting your data with strong encryption methods adds an extra layer of security. Utilizing blockchain technology can help create tamper-proof records of your contents authenticity. Consider employing AI-based detection tools to identify potential deepfakes. Register your content with copyright authorities for legal protection, and clearly define the permitted uses of your content in terms of service agreements.'
    },
    {
      question: 'Is deepfake detection legal?',
      answer: 'Yes, deepfake detection is legal in most jurisdictions, as it primarily involves analyzing and identifying manipulated content for various purposes such as cybersecurity, media forensics, and protecting intellectual property. However, the legality may vary depending on how the detection tools are used. For instance, using deepfake detection tools to verify the authenticity of media content or prevent fraud is generally permissible.'
    },
    {
      question: 'How long does it take DeepGuard deepfake detector to produce results?',
      answer: 'DeepBrain AIs deepfake detector can identify AI-generated and altered voices, videos, and images in under 5 minutes, although this may vary based on the complexity and file size of the content.'
    },
   
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-5xl font-bold text-center mb-5">Frequently Asked Questions</h2>
      <ul className="divide-y-2 divide-gray-100">
        {faqs.map((faq, index) => (
          <li key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-gray-700 bg-gray-50 p-4 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              className={`${
                activeIndex === index ? 'block' : 'hidden'
              } overflow-hidden transition-height duration-300 ease-in-out`}
            >
              <p className="mt-2 p-4 bg-white rounded-b-lg">
                {faq.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
