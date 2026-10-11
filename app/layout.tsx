import type { Metadata, Viewport } from 'next';
import { Oswald, Manrope } from 'next/font/google';
import { SITE_URL } from '@/lib/studio';
import './globals.css';

const display = Oswald({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--font-display', display: 'swap' });
const sans = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'DOSCAR04 — автосервис и детейлинг в Актобе',
  description: 'Замена масла, детейлинг, автоэлектрика и тонировка в DOSCAR04. Актобе, ул. Тургенева, 93Б. Запись в WhatsApp: +7 708 219 64 85.',
  robots: { index: false, follow: false },
  openGraph: { title: 'DOSCAR04 / Сервис. Детейлинг. Характер.', description: 'Ваш автомобиль. Наше внимание к деталям. Актобе, Тургенева, 93Б.', locale: 'ru_KZ', type: 'website', images: [{url: '/opengraph-image', width:1200,height:630}] },
  twitter: { card:'summary_large_image' },
};
export const viewport: Viewport = { themeColor:'#101113', colorScheme:'dark light' };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
