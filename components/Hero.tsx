'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MessageCircle, Star } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { EASE_EXPO, useMediaQuery } from '@/lib/motion';
import { studio, WHATSAPP_URL } from '@/lib/studio';
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const desktop = useMediaQuery('(min-width: 1000px)');
  const {scrollYProgress} = useScroll({target:ref,offset:['start start','end start']});
  const y = useTransform(scrollYProgress,[0,1],['0%','12%']);
  return <section id="top" className="hero" ref={ref} aria-labelledby="hero-title">
    <div className="hero-media"><motion.div className="hero-image" style={{y: reduced || !desktop ? 0 : y}}><Image src="/images/hero.jpg" alt="Спортивный автомобиль с красными задними фонарями — атмосферная фотография" fill preload sizes="(max-width: 999px) 100vw, 65vw" quality={85}/></motion.div><div className="hero-shade"/><span className="photo-credit">Атмосфера / Erik Mclean · Unsplash</span><div className="hero-photo-label"><span>DOSCAR04</span><small>AUTO SERVICE / DETAILING</small></div></div>
    <div className="hero-content wrap"><div className="hero-eyebrow"><span className="red-line"/> АВТОСЕРВИС В АКТОБЕ</div>
      <h1 id="hero-title">{['СЕРВИС.','ДЕТЕЙЛИНГ.','ХАРАКТЕР.'].map((word,i)=><span className="hero-line" key={word}><motion.span initial={false} animate={{y:0}} transition={{duration:reduced?0:1,ease:EASE_EXPO,delay:i*.1}} className={i===2?'outline-type':''}>{word}</motion.span></span>)}</h1>
      <p className="hero-description">От замены масла до деталей,<br/>которые меняют всё.</p>
      <div className="hero-actions"><MagneticButton href={WHATSAPP_URL} external variant="accent" icon={<MessageCircle size={18}/>} className="primary-button">Записаться в WhatsApp</MagneticButton><a href="#services" className="text-link">Выбрать услугу <ArrowDown size={17}/></a></div>
      <a href={`${studio.map}/tab/reviews`} target="_blank" rel="noopener noreferrer" className="hero-rating"><span className="rating-stars" aria-hidden>{Array.from({length:5},(_,i)=><Star key={i} size={12} fill="currentColor"/>)}</span><b>5,0</b><span>20 оценок в 2GIS</span><ArrowUpRight size={14}/></a>
    </div>
    <div className="hero-bottom wrap"><span>МАСЛО / ЭЛЕКТРИКА / ДЕТЕЙЛИНГ / ТОНИРОВКА</span><a href="#services" aria-label="Перейти к услугам"><ArrowDown size={18}/></a><span>ВАШ АВТОМОБИЛЬ. НАШЕ ВНИМАНИЕ.</span></div>
  </section>;
}
