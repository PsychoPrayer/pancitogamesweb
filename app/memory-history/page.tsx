import type { Metadata } from 'next';
import MemoryHistoryContent from './MemoryHistoryContent';

export const metadata: Metadata = {
  title: 'Memory History - Discover Venezuelan History | PancitoGames',
  description:
    'A memory game celebrating Venezuelan history and culture. 55 collectibles, 80 unique levels, and educational tests. Available on Android and iOS.',
};

export default function MemoryHistoryPage() {
  return <MemoryHistoryContent />;
}

