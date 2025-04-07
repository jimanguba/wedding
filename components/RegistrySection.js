export default function RegistrySection() {
  return (
    <div className="text-center px-4 pt-24 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Registry</h1>

      <p className="text-gray-600 text-lg leading-relaxed">
        Your presence is more than enough, and we&apos;re not expecting any
        gifts. But, if you wish to contribute to our married life,
        <span className="block mt-2 font-medium text-[color:#800000]">
          come back soon to see our registry 💝
        </span>
      </p>

      {/* Optionally: add a "Coming Soon" badge */}
      <div className="mt-8 inline-block bg-[color:#f3e6e6] text-[color:#800000] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        Registry Coming Soon
      </div>
    </div>
  );
}
