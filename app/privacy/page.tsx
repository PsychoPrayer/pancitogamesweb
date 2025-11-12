import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - PancitoGames',
  description:
    'Learn how PancitoGames handles personal information across games, websites, and services.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

