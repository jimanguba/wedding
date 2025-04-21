import { get } from "@vercel/edge-config";
import { parisienne } from "../fonts";

export default async function RegistrySection() {
  const showAmazonRegistry = await get("amazon-registry");

  return (
    <div className="text-center px-4 pt-24 max-w-2xl mx-auto">
      <h1
        className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative text-center ${parisienne.className}`}
      >
        Registry
      </h1>

      {showAmazonRegistry ? (
        <>
          <p className="text-gray-600 text-lg leading-relaxed">
            After our wedding we&apos;ll be moving in together for the first
            time as we begin our journey as husband and wife. We&apos;ve created
            a gift registry with items to make our house a loving home. Your
            support and generosity mean so much to us and we&apos;re truly
            grateful to have you in our lives during this joyful season.
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
          <p className="mt-8 text-md text-gray-500 dark:text-white leading-relaxed">
            After our wedding we&apos;ll be moving in together for the first
            time as we begin our journey as husband and wife. We&apos;re putting
            together a gift registry with items to help us make our house a
            loving home. Your support and generosity mean so much to us and
            we&apos;re truly grateful to have you in our lives during this
            joyful season.
          </p>

          <div className="mt-8 inline-block bg-muted/20 text-accent px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            Registry Coming Soon
          </div>
        </>
      )}
    </div>
  );
}
