'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageSwitcher';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactPage() {
  const language = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const copy = {
    en: {
      heroTitle: 'Write to PancitoGames',
      heroSubtitle:
        'Tell us about your project, your classroom, or the stories you want to preserve. We are listening.',
      formTitle: 'Send us a message',
      labels: {
        name: 'Name *',
        email: 'Email *',
        subject: 'Subject *',
        message: 'Message *',
      },
      placeholders: {
        name: 'Your name',
        email: 'your.email@example.com',
        subject: 'How can we help?',
        message: 'Share your idea, collaboration request, or feedback...',
      },
      submit: 'Send message',
      sending: 'Sending...',
      sent: 'Sent! ✓',
      thanks: 'Thank you! We will get back to you soon.',
      error: 'Oops! Something went wrong. Please try again.',
      infoTitle: 'Get in touch',
      emailLabel: 'Email',
      emailValue: 'hi@pancitogames.com',
      locationLabel: 'Location',
      locationValue: 'United States',
      founded: 'Founded in 2025',
      socialLabel: 'Social',
      socialNote: 'We are curating our networks—coming soon!',
      businessTitle: 'Business & partnerships',
      businessText:
        'For collaborations, press, or educational projects, write to our inbox and we will schedule a call.',
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          question: 'When will Memory History be released?',
          answer:
            'Memory History is in active development. Join our mailing list on the game page to be notified when the beta opens.',
        },
        {
          question: 'Which platforms will support your games?',
          answer:
            'We develop for Android first and bring the experience to iOS shortly after. Additional platforms will follow community demand.',
        },
        {
          question: 'Are you creating more games beyond Memory History?',
          answer:
            'Absolutely. We are prototyping new albums that explore histories from different regions across the Americas.',
        },
      ],
    },
    es: {
      heroTitle: 'Escríbenos a PancitoGames',
      heroSubtitle:
        'Cuéntanos sobre tu proyecto, tu aula o las historias que quieres preservar. Estamos atentos.',
      formTitle: 'Envíanos un mensaje',
      labels: {
        name: 'Nombre *',
        email: 'Correo *',
        subject: 'Asunto *',
        message: 'Mensaje *',
      },
      placeholders: {
        name: 'Tu nombre',
        email: 'tu.correo@ejemplo.com',
        subject: '¿Cómo podemos ayudarte?',
        message: 'Comparte tu idea, solicitud de colaboración o comentarios...',
      },
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      sent: '¡Enviado! ✓',
      thanks: '¡Gracias! Muy pronto nos pondremos en contacto.',
      error: 'Ups, algo salió mal. Intenta nuevamente.',
      infoTitle: 'Ponte en contacto',
      emailLabel: 'Correo',
      emailValue: 'hi@pancitogames.com',
      locationLabel: 'Ubicación',
      locationValue: 'Estados Unidos',
      founded: 'Fundado en 2025',
      socialLabel: 'Redes',
      socialNote: 'Estamos curando nuestras redes — ¡muy pronto!',
      businessTitle: 'Negocios y alianzas',
      businessText:
        'Para colaboraciones, prensa o proyectos educativos, escríbenos y agendamos una llamada.',
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cuándo se lanzará Memory History?',
          answer:
            'Memory History está en desarrollo activo. Únete a nuestra lista en la página del juego para enterarte cuando abra la beta.',
        },
        {
          question: '¿En qué plataformas estarán disponibles sus juegos?',
          answer:
            'Desarrollamos primero para Android y llevamos la experiencia a iOS poco después. Sumaremos otras plataformas según la comunidad.',
        },
        {
          question: '¿Están creando más juegos además de Memory History?',
          answer:
            'Claro que sí. Estamos prototipando nuevos álbumes que exploran historias de distintas regiones de las Américas.',
        },
      ],
    },
  } as const;

  const text = copy[language];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 900);
      });
      setStatus('sent');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-[var(--ink-muted)]">
            PancitoGames
          </p>
          <h1 className="mt-4 font-heading text-4xl text-[var(--ink-deep)] sm:text-5xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-muted)]">{text.heroSubtitle}</p>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--watercolor-forest)] via-transparent to-[var(--watercolor-sky)]" />
        </div>
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-10 shadow-[0_30px_60px_-20px_rgba(34,23,18,0.35)]">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-heading text-2xl text-[var(--ink-deep)]">
                {text.formTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    {text.labels.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={text.placeholders.name}
                    className="rounded-xl border border-[var(--ink-soft)] bg-[var(--parchment)] px-4 py-3 text-sm text-[var(--ink)] shadow-sm outline-none transition focus:border-[var(--accent-deep)] focus:ring-2 focus:ring-[var(--accent-soft)]/70"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    {text.labels.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={text.placeholders.email}
                    className="rounded-xl border border-[var(--ink-soft)] bg-[var(--parchment)] px-4 py-3 text-sm text-[var(--ink)] shadow-sm outline-none transition focus:border-[var(--accent-deep)] focus:ring-2 focus:ring-[var(--accent-soft)]/70"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  {text.labels.subject}
                </span>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={text.placeholders.subject}
                  className="rounded-xl border border-[var(--ink-soft)] bg-[var(--parchment)] px-4 py-3 text-sm text-[var(--ink)] shadow-sm outline-none transition focus:border-[var(--accent-deep)] focus:ring-2 focus:ring-[var(--accent-soft)]/70"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  {text.labels.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={text.placeholders.message}
                  className="resize-none rounded-xl border border-[var(--ink-soft)] bg-[var(--parchment)] px-4 py-3 text-sm text-[var(--ink)] shadow-sm outline-none transition focus:border-[var(--accent-deep)] focus:ring-2 focus:ring-[var(--accent-soft)]/70"
                />
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--ink-deep)] shadow-sm transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)] disabled:opacity-60"
              >
                {status === 'sending'
                  ? text.sending
                  : status === 'sent'
                    ? text.sent
                    : text.submit}
              </button>
              {status === 'sent' && (
                <p className="text-center text-sm font-semibold text-emerald-700">
                  {text.thanks}
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-semibold text-red-600">
                  {text.error}
                </p>
              )}
            </form>

            <aside className="space-y-8 rounded-[2rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-8">
              <h2 className="font-heading text-xl text-[var(--ink-deep)]">
                {text.infoTitle}
              </h2>
              <div className="space-y-6 text-sm text-[var(--ink-muted)]">
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    {text.emailLabel}
                  </p>
                  <a
                    href={`mailto:${text.emailValue}`}
                    className="mt-1 inline-flex text-[var(--accent-deep)] hover:underline"
                  >
                    {text.emailValue}
                  </a>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    {text.locationLabel}
                  </p>
                  <p className="mt-1 text-[var(--ink)]">{text.locationValue}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--ink-muted)]/70">
                    {text.founded}
                  </p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    {text.socialLabel}
                  </p>
                  <p className="mt-1 text-[var(--ink-muted)]">
                    {text.socialNote}
                  </p>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)]/80 p-6 text-sm text-[var(--ink-muted)] shadow-inner">
                <h3 className="font-heading text-lg text-[var(--ink-deep)]">
                  {text.businessTitle}
                </h3>
                <p className="mt-3">{text.businessText}</p>
                <a
                  href={`mailto:${text.emailValue}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--accent-deep)] hover:underline"
                >
                  {text.emailValue}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-55 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-5xl space-y-8 rounded-[2.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 text-center shadow-[0_30px_50px_-20px_rgba(34,23,18,0.3)]">
          <h2 className="font-heading text-3xl text-[var(--ink-deep)]">
            {text.faqTitle}
          </h2>
          <div className="space-y-6 text-left">
            {text.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg text-[var(--ink-deep)]">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

