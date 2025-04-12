"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What should I wear?",
    answer:
      "We're still finalizing the dress code, but we're aiming for something comfortable and celebratory.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "We’re keeping things intimate and personal. If your invitation includes a plus one, they’re more than welcome! Otherwise, we kindly ask that you attend solo — thank you for understanding.",
  },
  {
    question: "Are children invited?",
    answer:
      "We love your little ones! That said, we're still finalizing our guest list. If your invitation includes children, they'll be welcome. Otherwise, we hope you enjoy a night off just for you.",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Parking details are still being confirmed — we'll share info here and on the invitation as soon as possible.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We're still confirming ceremony timing, but arriving about 15–20 minutes early is always a safe bet. We'll post final details closer to the date.",
  },
  {
    question: "Will food and drinks be provided?",
    answer:
      "Yes! Expect delicious food, drinks, and great company. We’ll share more about the menu and flow of the evening as plans come together.",
  },
  {
    question: "Where should I stay?",
    answer:
      "We’re gathering nearby hotel recommendations for our out-of-town guests. Stay tuned for a list of suggested places to stay.",
  },
  {
    question: "Do I need to RSVP?",
    answer:
      "Yes, kindly respond by the date indicated on your invitation. Your RSVP helps us plan thoughtfully and ensure a smooth experience for everyone.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask that you keep phones and cameras tucked away during the ceremony. We're planning an unplugged moment so everyone can be fully present with us. Don’t worry — we’ll have a professional capturing the day.",
  }  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">FAQ&apos;s</h1>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <Minus size={20} strokeWidth={2} />
                ) : (
                  <Plus size={20} strokeWidth={2} />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen && faq.answer ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-700"
              >
                <div className="py-2 pr-6">{faq.answer}</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
