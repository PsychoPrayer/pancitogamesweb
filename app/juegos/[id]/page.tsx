import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { juegos, getJuego, t } from '../../../lib/juegos';
import JuegoClient from './JuegoClient';

export function generateStaticParams() {
  return juegos.map((juego) => ({ id: juego.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const juego = getJuego((await params).id);
  if (!juego) return {};
  return {
    title: `${juego.titulo} - PancitoGames`,
    description: t(juego.resumen, 'es'),
    openGraph: juego.portada ? { images: [juego.portada] } : undefined,
  };
}

export default async function JuegoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const juego = getJuego((await params).id);
  if (!juego) notFound();
  return <JuegoClient juego={juego} />;
}
