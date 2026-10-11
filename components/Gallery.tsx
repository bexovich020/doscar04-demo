'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowUpRight, Expand, X } from 'lucide-react';
import { studio } from '@/lib/studio';
const photos=[
  {src:'/images/business/detailing-work.webp',title:'Внимание к поверхности',category:'ДЕТЕЙЛИНГ',alt:'Чёрный Toyota во время ухода за кузовом в Doscar'},
  {src:'/images/business/workshop-interior.webp',title:'Внутри DOSCAR04',category:'СЕРВИС',alt:'Lexus в реальном сервисном боксе Doscar'},
  {src:'/images/business/doscar-cars-night.webp',title:'Автомобили в сервисе',category:'DOSCAR04',alt:'Автомобили у сервиса Doscar вечером'},
];
export default function Gallery(){
 const dialog=useRef<HTMLDialogElement>(null);
 const [selected,setSelected]=useState(0);
 return <section id="work" className="work-section" aria-labelledby="work-title"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">НАСТОЯЩИЙ DOSCAR04</p><h2 id="work-title">Детали говорят<br/><span>за себя.</span></h2></div><div className="gallery-side"><p>Фотографии сервиса и автомобилей<br/>из публичной галереи DOSCAR04.</p><a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="text-link">Больше в Instagram <ArrowUpRight size={18}/></a></div></div><div className="work-grid">{photos.map((p,i)=><figure key={p.src} className={`work-photo work-photo-${i}`}><button className="photo-open" aria-label={`Открыть фото: ${p.title}`} onClick={()=>{setSelected(i);dialog.current?.showModal()}}><Image src={p.src} alt={p.alt} fill sizes="(max-width: 699px) 90vw, (max-width: 999px) 45vw, 32vw" quality={85}/><span className="photo-expand"><Expand size={17}/></span></button><figcaption><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><span className="real-photo">Фото сервиса · 2GIS</span></figcaption></figure>)}</div><div className="work-foot"><span>Без фильтра обещаний. С вниманием к деталям.</span><a href={`${studio.map.replace('/firm/','/gallery/firm/')}`} target="_blank" rel="noopener noreferrer">Все фотографии в 2GIS <ArrowUpRight size={16}/></a></div></div><dialog ref={dialog} className="photo-dialog" aria-label="Фотография DOSCAR04"><button className="dialog-close" aria-label="Закрыть фотографию" onClick={()=>dialog.current?.close()}><X size={25}/></button><div className="dialog-image"><Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="(max-width: 800px) 90vw, 720px" style={{objectFit:'contain'}} quality={90}/></div><p>{photos[selected].title} · Реальное фото DOSCAR04 / 2GIS</p></dialog></section>;
}
