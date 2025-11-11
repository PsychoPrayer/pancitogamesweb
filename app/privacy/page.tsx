import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PancitoGames',
  description: 'Privacy Policy for PancitoGames and Memory History. Learn how we protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--pancito-dark)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/80">Last updated: November 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* English Version */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">English</h2>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">At PancitoGames</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We respect your privacy. This policy describes how we handle information in our games and services.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Data Collection</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Memory History</strong> does <strong>NOT</strong> collect, store, or share personal user information. 
                All game progress is saved locally on your device.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Website Use</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This website may use basic cookies to improve your browsing experience. We do not track or sell your information.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Third-Party Services</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We do not integrate any third-party tracking or analytics services that collect personal information.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Children&apos;s Privacy</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our games are suitable for all ages. We do not knowingly collect personal information from children under 13.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Changes to This Policy</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have questions about this policy, please contact us at:{' '}
                <a href="mailto:hi@pancitogames.com" className="text-[var(--pancito-primary)] hover:underline font-semibold">
                  hi@pancitogames.com
                </a>
              </p>
            </div>

            {/* Spanish Version */}
            <div className="border-t border-gray-300 pt-16">
              <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Español</h2>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">En PancitoGames</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Respetamos tu privacidad. Esta política describe cómo manejamos la información en nuestros juegos y servicios.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Recopilación de Datos</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Memory History</strong> <strong>NO</strong> recopila, almacena ni comparte información personal de los usuarios. 
                Todo el progreso del juego se guarda localmente en tu dispositivo.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Uso de la Web</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Este sitio web puede usar cookies básicas para mejorar tu experiencia de navegación. No rastreamos ni vendemos tu información.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Servicios de Terceros</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                No integramos ningún servicio de seguimiento o análisis de terceros que recopile información personal.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Privacidad de los Niños</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestros juegos son aptos para todas las edades. No recopilamos intencionalmente información personal de niños menores de 13 años.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cambios a Esta Política</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contacto</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Si tienes preguntas sobre esta política, contáctanos en:{' '}
                <a href="mailto:hi@pancitogames.com" className="text-[var(--pancito-primary)] hover:underline font-semibold">
                  hi@pancitogames.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



