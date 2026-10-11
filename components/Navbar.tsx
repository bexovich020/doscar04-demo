'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { studio, WHATSAPP_URL, PHONE_URL } from '@/lib/studio';
const links = [{href:'#services',label:'Услуги'},{href:'#work',label:'В сервисе'},{href:'#reviews',label:'Репутация'},{href:'#contact',label:'Контакты'}];
export default function Navbar() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1000px)');
    const close = () => { if (media.matches) dialog.current?.close(); };
    media.addEventListener('change', close);
    return () => media.removeEventListener('change', close);
  }, []);
  return <header className="site-header"><div className="header-inner wrap">
    <a href="#top" className="brand" aria-label="DOSCAR04 — на главную"><Image src="/images/business/instagram-logo.webp" alt="" width={48} height={48}/><span>DOSCAR<span className="brand-red">04</span><small>АВТОСЕРВИС & ДЕТЕЙЛИНГ</small></span></a>
    <span className="header-location">АКТОБЕ <span> / </span> ТУРГЕНЕВА, 93Б</span>
    <nav aria-label="Основная навигация" className="desktop-nav">{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav>
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="header-cta">Записаться <ArrowUpRight size={17}/></a>
    <button className="menu-toggle" aria-label="Открыть меню" aria-haspopup="dialog" onClick={()=>dialog.current?.showModal()}><Menu/></button>
    <dialog ref={dialog} className="mobile-menu" aria-label="Меню DOSCAR04"><div className="menu-top"><span className="wordmark">DOSCAR<span>04</span></span><button aria-label="Закрыть меню" onClick={()=>dialog.current?.close()}><X/></button></div><nav aria-label="Мобильная навигация">{links.map(l=><a key={l.href} href={l.href} onClick={()=>dialog.current?.close()}>{l.label}<ArrowUpRight/></a>)}</nav><div className="menu-bottom"><p>Актобе · Тургенева, 93Б</p><a href={PHONE_URL}>{studio.displayPhone}</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Написать в WhatsApp <ArrowUpRight size={16}/></a></div></dialog>
  </div></header>;
}
