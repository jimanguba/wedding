'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TravelModal() {
  const router = useRouter();

  const closeModal = () => router.push('/guests', { shallow: true });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="bg-white max-w-xl w-full mx-4 rounded-2xl p-6 shadow-xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold text-center mb-4">
            Information for Out-of-Town Guests
          </h2>

          <div className="text-gray-700 space-y-4">
            <p>
              We’re so grateful you’re planning to celebrate with us — especially if you’re coming from out of town.
              We’re still finalizing the details, but here’s what we’ll be sharing soon:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Where to Stay:</strong> Nearby hotel suggestions and booking info
              </li>
              <li>
                <strong>Travel Tips:</strong> Directions, transportation, and parking
              </li>
              <li>
                <strong>Local Recommendations:</strong> A few favorite spots to eat and explore
              </li>
            </ul>

            <p>
              This page will be updated as plans come together — feel free to check back closer to the big day!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
