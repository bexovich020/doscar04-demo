export const SITE_URL = 'https://doscar04-demo-bexxx1.vercel.app';
export const studio = {
  name: 'DOSCAR04', city: 'Актобе', address: 'ул. Тургенева, 93Б',
  phone: '+77082196485', displayPhone: '+7 708 219 64 85',
  instagram: 'https://www.instagram.com/service_dos.04/',
  map: 'https://2gis.kz/aktobe/firm/70000001116521660',
  route: 'https://2gis.kz/aktobe/directions/points/%7C57.16901%2C50.30216%3B70000001116521660',
  rating: '5,0', ratings: 20, reviews: 16,
} as const;
export const PHONE_URL = `tel:${studio.phone}`;
export function whatsappLink(service?: string) {
  const message = service ? `Здравствуйте! Хочу уточнить стоимость и записаться: ${service}. Автомобиль: ` : 'Здравствуйте! Хочу записаться в DOSCAR04. Автомобиль: ';
  return `https://wa.me/77082196485?text=${encodeURIComponent(message)}`;
}
export const WHATSAPP_URL = whatsappLink();
