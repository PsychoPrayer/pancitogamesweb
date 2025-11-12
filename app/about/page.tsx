import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us - PancitoGames',
  description:
    'Learn about PancitoGames, our mission to create educational gaming experiences, and our commitment to celebrating shared culture.',
};

export default function AboutPage() {
  return <AboutContent />;
}


