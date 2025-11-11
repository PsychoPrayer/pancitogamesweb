import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - PancitoGames',
  description: 'Terms and Conditions for using PancitoGames products and services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--pancito-dark)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
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

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Intellectual Property</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All games, graphics, music, and content from PancitoGames are the property of PancitoGames © 2016-2024. 
                All rights reserved.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Use of Our Games</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our games are for personal use and entertainment. Commercial use is not permitted without express permission from PancitoGames.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Educational Content</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The historical content in our games is presented for educational purposes. While we strive for accuracy, 
                we recommend consulting additional sources for academic research.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">User Conduct</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Users agree to use our games and services responsibly and not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Attempt to reverse engineer, decompile, or extract source code</li>
                <li>Use our content for commercial purposes without permission</li>
                <li>Redistribute or sell our games or content</li>
                <li>Use our services to violate any laws or regulations</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Disclaimer of Warranties</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our games and services are provided &quot;as is&quot; without warranties of any kind, either express or implied. 
                PancitoGames does not guarantee that our services will be uninterrupted or error-free.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Limitation of Liability</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To the maximum extent permitted by law, PancitoGames shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of our games or services.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Changes to Terms</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We reserve the right to modify these terms at any time. Updates will be posted on this page with an updated revision date. 
                Continued use of our services after changes constitutes acceptance of the new terms.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Governing Law</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the United States.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For legal inquiries, please contact:{' '}
                <a href="mailto:hi@pancitogames.com" className="text-[var(--pancito-primary)] hover:underline font-semibold">
                  hi@pancitogames.com
                </a>
              </p>
            </div>

            {/* Spanish Version */}
            <div className="border-t border-gray-300 pt-16">
              <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Español</h2>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Propiedad Intelectual</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Todos los juegos, gráficos, música y contenido de PancitoGames son propiedad de PancitoGames © 2016-2024. 
                Todos los derechos reservados.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Uso de Nuestros Juegos</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestros juegos son para uso personal y entretenimiento. No se permite el uso comercial sin permiso expreso de PancitoGames.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contenido Educativo</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                El contenido histórico en nuestros juegos se presenta con fines educativos. Aunque nos esforzamos por la precisión, 
                recomendamos consultar fuentes adicionales para investigación académica.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Conducta del Usuario</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Los usuarios aceptan usar nuestros juegos y servicios responsablemente y no:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Intentar realizar ingeniería inversa, decompilar o extraer código fuente</li>
                <li>Usar nuestro contenido con fines comerciales sin permiso</li>
                <li>Redistribuir o vender nuestros juegos o contenido</li>
                <li>Usar nuestros servicios para violar leyes o regulaciones</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Descargo de Garantías</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestros juegos y servicios se proporcionan &quot;tal cual&quot; sin garantías de ningún tipo, ya sean expresas o implícitas. 
                PancitoGames no garantiza que nuestros servicios sean ininterrumpidos o libres de errores.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Limitación de Responsabilidad</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                En la máxima medida permitida por la ley, PancitoGames no será responsable de ningún daño indirecto, incidental, 
                especial, consecuente o punitivo resultante del uso de nuestros juegos o servicios.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cambios a los Términos</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones se publicarán en esta página 
                con una fecha de revisión actualizada. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de los nuevos términos.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ley Aplicable</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contacto</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Para consultas legales, contáctanos en:{' '}
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



