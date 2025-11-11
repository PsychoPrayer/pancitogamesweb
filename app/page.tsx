import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--pancito-primary)] to-[var(--pancito-secondary)] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Creating Memorable Gaming Experiences
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              PancitoGames develops educational and entertaining mobile games that connect culture, history, and fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#games"
                className="inline-block bg-white text-[var(--pancito-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Discover Our Games
              </a>
              <Link
                href="/about"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--pancito-primary)] transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--pancito-dark)]">
            Why Choose PancitoGames
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--pancito-dark)]">Quality Games</h3>
              <p className="text-gray-600">
                We develop polished and well-designed experiences that respect the player&apos;s time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--pancito-dark)]">Cultural Content</h3>
              <p className="text-gray-600">
                Our games celebrate the historical and cultural richness of Venezuela and Latin America.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--pancito-dark)]">Fun Learning</h3>
              <p className="text-gray-600">
                Education and entertainment in perfect harmony. Learn while you play.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--pancito-dark)]">Careful Design</h3>
              <p className="text-gray-600">
                Every pixel, every sound, every mechanic is designed to offer the best experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase Section */}
      <section id="games" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--pancito-dark)]">
            Our Games
          </h2>

          {/* Memory History Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Image Side */}
              <div className="md:w-1/2 bg-[var(--memory-cream)] flex items-center justify-center p-8">
                <Image
                  src="/MemoryHistoryLogoSinFondo.png"
                  alt="Memory History Logo"
                  width={300}
                  height={300}
                  className="w-full max-w-xs"
                />
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Memory History</h3>
                <p className="text-xl text-[var(--memory-cream)] mb-4 italic">
                  &quot;Discover Venezuela, one card at a time&quot;
                </p>
                <p className="text-white/90 mb-6 leading-relaxed">
                  A memory game celebrating Venezuelan history and culture. 55 collectibles, 81 unique levels, and educational tests to challenge your knowledge.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[var(--memory-gold)] text-[var(--memory-brown)] px-3 py-1 rounded-full text-sm font-semibold">
                      In Development
                    </span>
                  </div>
                  <div className="text-white/80 text-sm">
                    <span className="font-semibold">Platforms:</span> Android | iOS (Coming Soon)
                  </div>
                </div>

                <Link
                  href="/memory-history"
                  className="inline-block bg-[var(--memory-gold)] text-[var(--memory-brown)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--memory-parchment)] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <p className="text-center text-gray-500 mt-12 text-lg">
            More games coming soon... Stay tuned! 🎮
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--pancito-primary)] to-[var(--pancito-secondary)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of players discovering history through fun and engaging gameplay.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--pancito-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
