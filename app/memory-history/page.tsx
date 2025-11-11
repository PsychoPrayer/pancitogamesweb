import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memory History - Discover Venezuelan History | PancitoGames',
  description: 'A memory game celebrating Venezuelan history and culture. 55 collectibles, 81 unique levels, and educational tests. Available on Android and iOS.',
};

export default function MemoryHistoryPage() {
  const collectibles = [
    { emoji: '🏔️', name: 'Salto Ángel', description: 'The world\'s highest waterfall' },
    { emoji: '🫓', name: 'Arepa', description: 'Heart of Venezuelan cuisine' },
    { emoji: '⚡', name: 'Catatumbo Lightning', description: 'Unique natural phenomenon' },
    { emoji: '🦸', name: 'Simón Bolívar', description: 'The Liberator' },
    { emoji: '🌳', name: 'Araguaney', description: 'National tree' },
    { emoji: '🎭', name: 'Diablos de Yare', description: 'UNESCO Cultural Heritage' },
  ];

  return (
    <div className="bg-[var(--memory-cream)] min-h-screen">
      {/* Hero Section - Vintage Style */}
      <section className="relative bg-gradient-to-br from-[var(--memory-copper)] via-[var(--memory-bronze)] to-[var(--memory-gold)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/MemoryHistoryLogoSinFondo.png"
                alt="Memory History Logo"
                width={200}
                height={200}
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
              Memory History
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-[var(--memory-parchment)] italic">
              Discover the History of Venezuela
            </p>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              A journey through time where each revealed pair unlocks a piece of Venezuela&apos;s rich history and culture.
            </p>
            <button className="bg-[var(--memory-gold)] text-[var(--memory-brown)] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[var(--memory-parchment)] transition-colors shadow-lg">
              Coming Soon to Beta
            </button>
          </div>
        </div>
      </section>

      {/* About the Game */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--memory-brown)]">
            About the Game
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Memory History is not just a memory game. It&apos;s an educational experience that transports you through Venezuelan history, from its indigenous roots to its natural wonders and cultural traditions.
            </p>
            <p className="text-xl">
              Each level is a unique challenge. Each unlocked collectible is a history lesson. Each test passed is an achievement demonstrating your knowledge of Venezuela.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-[var(--memory-cream)] to-[var(--memory-parchment)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--memory-brown)]">
            Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-copper)]">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                55 Historical Collectibles
              </h3>
              <p className="text-gray-700">
                From Salto Ángel to the Hallaca, from Simón Bolívar to the Tepuyes. Discover the symbols that define Venezuela.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-bronze)]">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                81 Challenging Levels
              </h3>
              <p className="text-gray-700">
                Each level presents a unique challenge with special mechanics, from classic pairs to strategic resets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-gold)]">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                Educational Test System
              </h3>
              <p className="text-gray-700">
                5 exam levels based on unlocked collectibles. Prove your knowledge and earn special achievements.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-copper)]">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                Bilingual: Spanish & English
              </h3>
              <p className="text-gray-700">
                Share Venezuelan culture with the world. Play in your preferred language.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-bronze)]">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                No Intrusive Ads
              </h3>
              <p className="text-gray-700">
                A respectful gaming experience designed for learning and fun.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[var(--memory-gold)]">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--memory-brown)]">
                Careful Design
              </h3>
              <p className="text-gray-700">
                Colorful cartoon-style illustrations bring each historical and cultural element to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collectibles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--memory-brown)]">
            Featured Collectibles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectibles.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            ... and 49 more waiting to be discovered!
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Memory History
          </h2>
          <p className="text-xl mb-8 text-white/90">
            The game is currently in development.
            <br />
            Join our beta coming soon!
          </p>

          {/* Beta Signup Form (placeholder) */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-md mx-auto">
            <p className="text-lg mb-4">Get notified when the beta is ready:</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--memory-gold)]"
              />
              <button className="bg-[var(--memory-gold)] text-[var(--memory-brown)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--memory-parchment)] transition-colors">
                Notify Me
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



