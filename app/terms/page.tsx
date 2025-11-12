import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions - PancitoGames',
  description: 'Terms and conditions for using PancitoGames games and services.',
};

export default function TermsPage() {
  return <TermsContent />;
}

