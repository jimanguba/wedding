
import { get } from '@vercel/edge-config';

export default async function RegistrySection() {
  const showAmazonRegistry = await get('amazon-registry');

  return (
    <div className="text-center px-4 pt-24 max-w-2xl mx-auto">
      <h1 className="text-6xl font-serif text-heading font-bold mb-4 tracking-tight text-[#6b0d26] drop-shadow-lg z-10 relative text-center">
        Registry
      </h1>

      {showAmazonRegistry ? (
        <>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your love and presence mean the world to us, and we truly
            aren&apos;t expecting anything more. But if you&apos;d like to bless us
            as we start this new chapter together,
            <span className="block mt-2 font-medium text-[color:#800000] dark:text-[#BE7F89]">
              we’ve put together a little registry with love 💝
            </span>
          </p>

          <div className="mt-8 inline-block bg-[color:#f3e6e6] text-[color:#800000] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            Thank you from the bottom of our hearts
          </div>

          <div className="mt-10">
            <a
              href="https://www.amazon.ca/wedding/share/jillianandbraeden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[color:#800000] text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-[color:#a00000] transition"
            >
              Visit Our Amazon Registry
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
            Your presence is more than enough, and we&apos;re not expecting any
            gifts. But, if you wish to contribute to our married life,
            <span className="block mt-2 font-medium text-[color:#800000] dark:text-[#BE7F89]">
              come back soon to see our registry
            </span>
          </p>

          <div className="mt-8 inline-block bg-muted/20 text-accent px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            Registry Coming Soon
          </div>
        </>
      )}
    </div>
  );
}
