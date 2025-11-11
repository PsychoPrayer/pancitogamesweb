import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - PancitoGames',
  description: 'Learn about PancitoGames, our mission to create educational gaming experiences, and our commitment to celebrating Latin American culture.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--pancito-primary)] to-[var(--pancito-secondary)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PancitoGames</h1>
          <p className="text-xl text-white/90">
            Creating memorable gaming experiences since 2016
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <Image
              src="/LogoPancito.jpg"
              alt="PancitoGames Logo"
              width={150}
              height={150}
              className="rounded-full shadow-xl"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Our Story</h2>
            <p className="text-xl leading-relaxed mb-6">
              Founded in 2016 in the United States, PancitoGames was born from a passion for creating games that not only entertain but also educate and preserve culture.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We believe that video games are a powerful tool to connect people with their history and traditions. Every game we develop is a tribute to the stories that deserve to be told.
            </p>
            <p className="text-xl leading-relaxed">
              Our focus is on quality over quantity, creating experiences that respect the player&apos;s time while providing meaningful content that educates and entertains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--pancito-dark)]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create memorable gaming experiences that educate, entertain, and preserve the cultural richness of Latin America.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--pancito-dark)]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the reference studio for cultural educational games on mobile devices in the Hispanic market.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--pancito-dark)]">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>🎯 Quality over quantity</li>
                <li>📚 Education through entertainment</li>
                <li>🌎 Respect for cultural diversity</li>
                <li>❤️ Passion in every project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--pancito-dark)]">What We Do</h2>
          <div className="space-y-6">
            <div className="bg-[var(--pancito-light)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--pancito-dark)]">
                🎮 Educational Mobile Games
              </h3>
              <p className="text-gray-700">
                We develop mobile games that combine entertainment with education, focusing on cultural and historical content from Latin America.
              </p>
            </div>

            <div className="bg-[var(--pancito-light)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--pancito-dark)]">
                🌍 Cultural Preservation
              </h3>
              <p className="text-gray-700">
                Our games serve as digital museums, preserving and sharing cultural knowledge with new generations through interactive experiences.
              </p>
            </div>

            <div className="bg-[var(--pancito-light)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--pancito-dark)]">
                🎨 Quality Design
              </h3>
              <p className="text-gray-700">
                Every aspect of our games is carefully designed to provide an engaging and accessible experience for players of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--pancito-primary)] to-[var(--pancito-secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2016</div>
              <div className="text-white/80">Founded</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1+</div>
              <div className="text-white/80">Games in Development</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">55+</div>
              <div className="text-white/80">Cultural Elements</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-white/80">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Our Team</h2>
          <p className="text-xl text-gray-700 mb-8">
            A passionate team of developers, designers, and educators dedicated to creating meaningful gaming experiences.
          </p>
          <p className="text-gray-600">
            Based in the United States, working globally to bring Latin American culture to the world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get in touch with us! We&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--pancito-primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--pancito-secondary)] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}



