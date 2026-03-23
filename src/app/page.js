"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Euro,
  Globe,
  Headphones,
  HeartPulse,
  Hotel,
  Landmark,
  ShieldCheck,
  UsersRound,
  Brain,
  History,
  CheckCircle,
  Eye,
  /* insurance */
  ShieldAlert,
  PackagePlus,
  FileCheck,
  Users,
  Zap,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import BidForm from "@/components/bid-form";
import PaymentVariants from "@/components/payment-variants";

/* ─── design tokens ─── */
const gradStyle = {
  background: "linear-gradient(135deg, #dca7f2 0%, #a855f7 45%, #7c3aed 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
const accentBar       = { background: "linear-gradient(90deg, #dca7f2, #a855f7, #7c3aed)" };
const iconBg          = { background: "linear-gradient(135deg, rgba(220,167,242,0.18), rgba(168,85,247,0.12))" };
const cardShadow      = "0 2px 16px rgba(168,85,247,0.08), 0 1px 3px rgba(0,0,0,0.06)";
const cardShadowHover = "0 8px 32px rgba(168,85,247,0.16), 0 2px 8px rgba(0,0,0,0.08)";

/* ══════════════════════════════════════════════════════════════════
   FULL-PAGE DIAGONAL BACKGROUND
══════════════════════════════════════════════════════════════════ */
function PageDiagBg({ bands = 7 }) {
  return (
    <div aria-hidden="true" style={{ position:"fixed", inset:0, width:"100vw", height:"100vh", pointerEvents:"none", zIndex:0, overflow:"visible" }}>
      <div style={{ position:"absolute", top:0, left:0, width:"100%", height:`${bands * 100}vh` }}>
        {Array.from({ length: bands }).map((_, i) => {
          const R    = i % 2 === 0;
          const edge = R ? "right" : "left";
          const deg  = R ? "-8deg" : "8deg";
          const gDir = R ? "155deg" : "205deg";
          const top  = `${i * 100}vh`;
          return (
            <div key={i} style={{ position:"absolute", top, left:0, width:"100%", height:"100vh", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:"-40%", [edge]:"-6%", width:"58%", height:"180%", background:`linear-gradient(${gDir},rgba(220,167,242,.11) 0%,rgba(168,85,247,.07) 55%,transparent 85%)`, transform:`rotate(${deg})`, transformOrigin:R?"top right":"top left", borderRadius:"64px" }} />
              <div style={{ position:"absolute", top:"-30%", [edge]:"4%",  width:"40%", height:"160%", background:`linear-gradient(${gDir},rgba(220,167,242,.15) 0%,rgba(168,85,247,.09) 55%,transparent 90%)`, transform:`rotate(${deg})`, transformOrigin:R?"top right":"top left", borderRadius:"44px", border:"1px solid rgba(220,167,242,.14)" }} />
              <div style={{ position:"absolute", top:"-20%", [edge]:"15%", width:"24%", height:"140%", background:`linear-gradient(${gDir},rgba(220,167,242,.19) 0%,rgba(168,85,247,.11) 50%,transparent 85%)`, transform:`rotate(${deg})`, transformOrigin:R?"top right":"top left", borderRadius:"28px", border:"1px solid rgba(220,167,242,.19)" }} />
              <div style={{ position:"absolute", top:"-20%", [edge]:"33%", width:"2px",  height:"140%", background:"linear-gradient(180deg,transparent 0%,rgba(220,167,242,.5) 20%,rgba(168,85,247,.38) 80%,transparent 100%)", transform:`rotate(${deg})`, transformOrigin:R?"top right":"top left" }} />
              <div style={{ position:"absolute", top:"-20%", [edge]:"26%", width:"1px",  height:"140%", background:"linear-gradient(180deg,transparent 0%,rgba(220,167,242,.2) 40%,transparent 100%)", transform:`rotate(${deg})`, transformOrigin:R?"top right":"top left" }} />
              <div style={{ position:"absolute", top:"50%",  [edge]:"calc(33% - 4px)", width:"9px", height:"9px", borderRadius:"50%", background:"rgba(220,167,242,.6)", boxShadow:"0 0 14px 4px rgba(220,167,242,.28)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Section wrapper ─── */
function Section({ id, className = "", py = "py-16", children }) {
  return (
    <section id={id} className={`relative w-full ${py} ${className}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/* ─── SectionHeader ─── */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color:"#dca7f2" }}>{eyebrow}</p>
      <h2 className="font-bold tracking-tight mb-2" style={{ fontSize:"clamp(2rem,4.5vw,3.2rem)", lineHeight:1.1, ...gradStyle }}>{title}</h2>
      {subtitle && <p className="text-slate-500 text-sm max-w-xl">{subtitle}</p>}
      <div className="flex items-center gap-3 mt-4">
        <div className="h-[2px] w-16 rounded-full" style={accentBar} />
        <div className="h-[1px] w-8 rounded-full" style={{ background:"rgba(220,167,242,.3)" }} />
        <div className="h-[1px] w-4 rounded-full" style={{ background:"rgba(220,167,242,.15)" }} />
      </div>
    </div>
  );
}

/* ─── VisaBullet ─── */
function VisaBullet({ children }) {
  return (
    <li className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl transition-colors hover:bg-purple-50 group">
      <span className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform" style={accentBar} />
      <span className="text-sm text-slate-700">{children}</span>
    </li>
  );
}

/* ─── RegionCard ─── */
function RegionCard({ icon: Icon, title, children, twoCol = false }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="flex items-center gap-2 pb-2 mb-3" style={{ borderBottom:"1px solid rgba(220,167,242,.15)" }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={iconBg}><Icon size={15} style={{ color:"#dca7f2" }} /></div>
        <h4 className="font-semibold text-sm" style={gradStyle}>{title}</h4>
      </div>
      <ul className={`text-sm text-slate-500 gap-y-1.5 gap-x-3 ${twoCol?"grid grid-cols-2":"flex flex-col"}`}>{children}</ul>
    </div>
  );
}

/* ─── ServiceCard ─── */
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 group"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-3px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(220,167,242,.12) 0%,transparent 70%)" }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={iconBg}><Icon size={26} style={{ color:"#a855f7" }} /></div>
      <h3 className="text-xl font-bold mb-3" style={gradStyle}>{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
    </div>
  );
}

/* ─── WhyCard ─── */
function WhyCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 border rounded-2xl p-5 bg-white/80 backdrop-blur-sm relative overflow-hidden transition-all duration-300 group"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={iconBg}><Icon size={20} style={{ color:"#a855f7" }} /></div>
      <div>
        <h3 className="font-bold text-base mb-1" style={gradStyle}>{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
    </div>
  );
}

/* ─── BlogCard ─── */
function BlogCard({ src, badge, title, excerpt, date }) {
  return (
    <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl border p-4 transition-all duration-300"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-3px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="aspect-video rounded-xl overflow-hidden mb-5 relative">
        <Image alt={title} src={src} fill sizes="(max-width:1024px) 100vw,384px" style={{ objectFit:"cover" }}
          className="group-hover:scale-105 transition-transform duration-500" priority />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold"
          style={{ background:"rgba(255,255,255,.92)", color:"#a855f7", boxShadow:"0 1px 6px rgba(168,85,247,.15)" }}>{badge}</div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-[#a855f7]" style={{ lineHeight:1.3 }}>{title}</h3>
      <p className="text-slate-500 text-sm line-clamp-3 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{date}</span>
        <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1" style={{ color:"#a855f7" }}>
          Читать <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   INSURANCE COMPONENTS
══════════════════════════════════════════════════════════════════ */

function CoverageCard({ icon: Icon, title, items }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 group"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-3px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(220,167,242,.12) 0%,transparent 70%)" }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={iconBg}><Icon size={22} style={{ color:"#a855f7" }} /></div>
      <h3 className="font-bold text-base mb-4" style={gradStyle}>{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={accentBar} />
            <span className="text-sm text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
    </div>
  );
}

function AdvantageCard({ icon: Icon, label }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm flex items-center gap-4 py-4 px-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={iconBg}><Icon size={18} style={{ color:"#a855f7" }} /></div>
      <span className="font-semibold text-sm text-slate-700">{label}</span>
    </div>
  );
}

function StepCard({ n, label }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border flex items-center gap-4 transition-all duration-300 group relative overflow-hidden"
      style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-sm"
        style={{ background:"linear-gradient(135deg,#dca7f2,#a855f7,#7c3aed)" }}>{n}</div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <ArrowRight size={14} className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color:"#a855f7" }} />
    </div>
  );
}

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null);
  return (
    <div className="relative w-full">
      <PageDiagBg bands={7} />

      <main className="relative z-10">

        {/* ══════ VISAS ══════ */}
        <Section py="py-12">
          <SectionHeader eyebrow="Визовые услуги" title="Визы из Казахстана"
            subtitle="Профессиональная помощь в получении виз в любую страну мира" />
          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border relative overflow-hidden"
                style={{ borderColor:"rgba(220,167,242,.25)", boxShadow:cardShadow }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={accentBar} />
                <h4 className="font-bold text-base mb-4" style={gradStyle}>Виды виз</h4>
                <ul className="flex flex-col gap-1">
                  <VisaBullet>Дипломатические и служебные визы</VisaBullet>
                  <VisaBullet>Инвестиционные визы</VisaBullet>
                  <VisaBullet>Бизнес-визы</VisaBullet>
                  <VisaBullet>Туристические визы</VisaBullet>
                  <VisaBullet>Визы на лечение и частные цели</VisaBullet>
                  <VisaBullet>Студенческие и учебные визы</VisaBullet>
                  <VisaBullet>Рабочие визы</VisaBullet>
                  <VisaBullet>Визы на воссоединение семьи</VisaBullet>
                  <VisaBullet>Визы для ПМЖ</VisaBullet>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7 relative hidden lg:flex flex-col justify-between min-h-[380px] rounded-3xl overflow-hidden p-6"
              style={{ background:"linear-gradient(135deg,#1a0a2e 0%,#2d1354 40%,#4a1a72 70%,#6b2fa0 100%)", boxShadow:"0 8px 40px rgba(168,85,247,.22)" }}>
              <Image alt="World Map" src="/visa-from-kz.jpeg" fill sizes="756px" style={{ objectFit:"cover" }} priority />
              <svg className="absolute right-[-40px] top-[-40px] w-64 h-64 opacity-10" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="140" fill="none" stroke="#dca7f2" strokeWidth="1"/>
                <circle cx="150" cy="150" r="100" fill="none" stroke="#dca7f2" strokeWidth="0.7"/>
                <ellipse cx="150" cy="150" rx="140" ry="55" fill="none" stroke="#dca7f2" strokeWidth="0.5"/>
                <ellipse cx="150" cy="150" rx="55" ry="140" fill="none" stroke="#dca7f2" strokeWidth="0.5"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/70 via-transparent to-transparent" />
              <span className="relative z-10 self-start text-xs font-medium px-4 py-1.5 rounded-full"
                style={{ background:"rgba(220,167,242,.15)", border:"0.5px solid rgba(220,167,242,.4)", color:"#dca7f2" }} />
              <div className="relative z-10">
                <h3 className="font-bold mb-2" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"#f5e6ff", lineHeight:1.2 }}>
                  Откройте мир<br />вместе с нами
                </h3>
                <p className="text-sm" style={{ color:"rgba(245,230,255,.7)", maxWidth:280 }}>
                  Профессиональная помощь в получении виз в любую страну мира
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <RegionCard icon={Euro} title="Европа">
              <li>Германия</li><li>Франция</li><li>Испания</li><li>Италия</li><li>Англия</li>
            </RegionCard>
            <RegionCard icon={Landmark} title="Азия" twoCol>
              <li>Вьетнам</li><li>Индонезия</li><li>Камбоджа</li><li>Лаос</li>
              <li>Малайзия</li><li>Сингапур</li><li>Таиланд</li><li>Филиппины</li>
            </RegionCard>
            <RegionCard icon={Building2} title="Юго-Восточная Азия" twoCol>
              <li>Китай</li><li>Япония</li><li>Афганистан</li><li>Бангладеш</li>
              <li>Индия</li><li>Мальдивы</li><li>Пакистан</li><li>Шри-Ланка</li>
            </RegionCard>
            <RegionCard icon={Globe} title="Южная Америка (США/Канада)">
              <li>США</li><li>Канада</li><li>Австралия</li>
            </RegionCard>
          </div>
        </Section>

        {/* ══════ SERVICES ══════ */}
        <Section id="services" py="py-12">
          <SectionHeader eyebrow="Что мы предлагаем"
            title="Полный спектр дополнительных услуг для комфортного переезда и путешествий"
            subtitle="Консультация, заполнение анкет, страховка, легализация документов, апостиль, бронирование билетов, отелей и другое" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard icon={HeartPulse}  title="Авиа и ЖД билеты"
              desc="Бронирование и оформление авиабилетов и железнодорожных билетов в любые направления, включая консультацию по маршрутам и выгодным тарифам." />
            <ServiceCard icon={BadgeCheck}  title="Работа за рубежом"
              desc="Помощь в поиске легального трудоустройства в странах Европы, Азии и Америки. Полное документальное сопровождение." />
            <ServiceCard icon={Headphones}  title="Вызов специалиста"
              desc="Консультация нашего эксперта с выездом в ваш офис или на дом для сбора документов и заполнения анкет." />
            <ServiceCard icon={ShieldCheck} title="Проверка документов"
              desc="Профессиональный аудит вашего пакета документов для исключения рисков отказа в получении визы или РВП." />
            <ServiceCard icon={UsersRound}  title="Услуги для граждан РФ"
              desc="Специализированная помощь в получении ИИН, открытии банковских карт и оформлении ВНЖ для граждан Российской Федерации." />
            <ServiceCard icon={Hotel}       title="Бронирование отелей"
              desc="Подбор и бронирование отелей и курортных баз по всему миру по эксклюзивным корпоративным ценам." />
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════════
            INSURANCE — NOMAD INSURANCE
            Inserted after "Полный спектр дополнительных услуг…" block
        ══════════════════════════════════════════════════════════════════ */}
        <Section id="insurance" py="py-12">

          {/* banner */}
          <div className="relative w-full min-h-[300px] flex items-end rounded-3xl overflow-hidden mb-12"
            style={{ background:"linear-gradient(135deg,#1a0a2e 0%,#2d1354 40%,#4a1a72 70%,#6b2fa0 100%)", boxShadow:"0 8px 40px rgba(168,85,247,.22)" }}>
            <Image alt="Nomad Insurance" src="/nomad.png" fill style={{ objectFit:"cover", }} />
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="ins-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#dca7f2" strokeWidth="0.5"/>
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#ins-grid)" />
            </svg>
            <svg className="absolute right-[-40px] top-[-40px] w-72 h-72 opacity-10" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="180" fill="none" stroke="#dca7f2" strokeWidth="1"/>
              <circle cx="200" cy="200" r="130" fill="none" stroke="#dca7f2" strokeWidth="0.7"/>
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#dca7f2" strokeWidth="0.5"/>
              <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#dca7f2" strokeWidth="0.5"/>
            </svg>
            <div className="absolute inset-0 bg-linear-to-t from-[#1a0a2e]/90 via-[#1a0a2e]/20 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#1a0a2e]/60 via-transparent to-transparent" />
            <div className="relative z-10 p-8 md:p-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full"
                style={{ background:"rgba(220,167,242,.15)", border:"0.5px solid rgba(220,167,242,.4)", color:"#dca7f2" }}>
                🛡️ Партнёр · Nomad Insurance
              </span>
              <h2 className="font-bold mb-3" style={{ fontSize:"clamp(1.8rem,4vw,3rem)", lineHeight:1.1, color:"#f5e6ff", textShadow:"0 2px 20px rgba(168,85,247,.4)" }}>
                Страхование<br />
                <span style={{ ...gradStyle, textShadow:"none" }}>от Nomad Insurance</span>
              </h2>
              <p className="text-sm max-w-lg" style={{ color:"rgba(245,230,255,.90)", lineHeight:1.7 }}>
                Надёжная защита туристов во время поездок по Казахстану и за рубеж. Покрывает медицинские расходы, непредвиденные ситуации и финансовые риски в путешествии.
              </p>
            </div>
          </div>

          {/* intro */}
          <div className="grid lg:grid-cols-2 gap-5 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border relative overflow-hidden"
              style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={accentBar} />
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color:"#dca7f2" }}>О страховании</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                Страхование путешествий — надёжная защита туристов во время поездок по Казахстану и за рубеж. Полис покрывает медицинские расходы, непредвиденные ситуации и финансовые риски в путешествии.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Предлагаем как <span className="font-semibold" style={{ color:"#a855f7" }}>обязательное страхование</span>, так и <span className="font-semibold" style={{ color:"#a855f7" }}>добровольное медицинское страхование</span> для выезжающих за границу.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border relative overflow-hidden"
              style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={accentBar} />
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color:"#dca7f2" }}>Почему важно</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Даже обычная поездка может сопровождаться рисками — от пищевого отравления до травм. Медицинские расходы за границей могут достигать нескольких тысяч долларов.
              </p>
              <div className="rounded-xl p-4 border" style={{ background:"rgba(220,167,242,.06)", borderColor:"rgba(220,167,242,.2)" }}>
                <p className="text-sm font-semibold" style={{ color:"#a855f7" }}>Страхование — это не расход, а защита бюджета и здоровья.</p>
              </div>
            </div>
          </div>

          {/* coverage */}
          <SectionHeader eyebrow="Полис покрывает" title="Что покрывает страхование?"
            subtitle="Комплексная защита на весь период вашей поездки" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            <CoverageCard icon={HeartPulse}  title="Медицинские расходы"
              items={["Экстренная медицинская помощь","Госпитализация и лечение","Медикаменты"]} />
            <CoverageCard icon={ShieldAlert} title="Несчастные случаи"
              items={["Травмы","Временная потеря трудоспособности","Инвалидность"]} />
            <CoverageCard icon={PackagePlus} title="Дополнительные расходы"
              items={["Экстренная эвакуация","Репатриация на родину","Поддержка 24/7"]} />
            <CoverageCard icon={FileCheck}   title="Для визы и поездок"
              items={["Подходит для получения виз","Обязателен при выезде по путёвкам","Действует весь срок поездки"]} />
          </div>

          {/* where + who */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div>
              <SectionHeader eyebrow="География" title="Где действует?" />
              <div className="flex flex-col gap-3">
                {[
                  { icon: Globe,     text:"По всему миру — в зависимости от выбранной зоны покрытия" },
                  { icon: FileCheck, text:"На период поездки — от нескольких дней до 1 года" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="bg-white/80 backdrop-blur-sm flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden"
                    style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
                    onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; }}
                    onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; }}>
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={iconBg}><Icon size={18} style={{ color:"#a855f7" }} /></div>
                    <span className="text-sm text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Целевая аудитория" title="Кому подходит?" />
              <div className="grid grid-cols-2 gap-3">
                {["Туристам","Бизнес-путешественникам","Студентам","Семьям с детьми","Трудовым мигрантам"].map((who) => (
                  <div key={who} className="bg-white/80 backdrop-blur-sm flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 group relative overflow-hidden"
                    style={{ borderColor:"rgba(220,167,242,.2)", boxShadow:cardShadow }}
                    onMouseEnter={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow=cardShadowHover; e.currentTarget.style.transform="translateY(-2px)"; }}
                    onMouseLeave={(e)=>{ e.currentTarget.style.borderColor="rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow=cardShadow; e.currentTarget.style.transform="translateY(0)"; }}>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={iconBg}><Users size={13} style={{ color:"#a855f7" }} /></div>
                    <span className="text-sm font-medium text-slate-700">{who}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* advantages */}
          <SectionHeader eyebrow="Nomad Insurance" title="Преимущества"
            subtitle="Почему тысячи туристов выбирают Nomad Insurance" />
          <div className="flex flex-wrap gap-4 mb-16">
            <AdvantageCard icon={BadgeCheck} label="Надёжная страховая компания Казахстана" />
            <AdvantageCard icon={Zap}        label="Быстрое оформление онлайн" />
            <AdvantageCard icon={Headphones} label="Поддержка 24/7" />
            <AdvantageCard icon={FileCheck}  label="Соответствие требованиям виз" />
            <AdvantageCard icon={Globe}      label="Широкое покрытие рисков" />
            <AdvantageCard icon={CreditCard} label="Стандарт и Premium программы" />
          </div>

          {/* how to */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="shrink-0 md:sticky md:top-24">
              <div className="rounded-2xl px-8 py-6 relative overflow-hidden"
                style={{ background:"linear-gradient(135deg,#dca7f2,#a855f7,#7c3aed)", boxShadow:"0 8px 32px rgba(168,85,247,.35)", minWidth:180 }}>
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 120">
                  <circle cx="160" cy="30" r="80" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="160" cy="30" r="50" fill="none" stroke="white" strokeWidth="0.6"/>
                </svg>
                <h3 className="text-2xl font-bold text-white relative z-10 whitespace-nowrap"
                  style={{ textShadow:"0 2px 12px rgba(0,0,0,.2)" }}>Как оформить?</h3>
              </div>
              <div className="flex flex-col gap-1 mt-4 pl-2">
                <div className="h-[2px] w-full rounded-full" style={accentBar} />
                <div className="h-[1px] w-3/4 rounded-full" style={{ background:"rgba(220,167,242,.3)" }} />
                <div className="h-[1px] w-1/2 rounded-full" style={{ background:"rgba(220,167,242,.15)" }} />
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <StepCard n="1" label="Выберите направление поездки" />
              <StepCard n="2" label="Укажите даты" />
              <StepCard n="3" label="Выберите сумму покрытия" />
              <StepCard n="4" label="Оплатите онлайн" />
              <StepCard n="5" label="Получите электронный полис" />
            </div>
          </div>

        </Section>
        {/* ══════════════════════════════════════════════════════════════════ */}

        {/* ══════ BID FORM ══════ */}
        <Section py="py-12">
          <BidForm />
        </Section>

        {/* ══════ WHY US ══════ */}
        <Section id="why-us" py="py-12">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0">
              <div className="rounded-2xl px-8 py-6 relative overflow-hidden"
                style={{ background:"linear-gradient(135deg,#dca7f2,#a855f7,#7c3aed)", boxShadow:"0 8px 32px rgba(168,85,247,.35)", minWidth:180 }}>
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 120">
                  <circle cx="160" cy="30" r="80" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="160" cy="30" r="50" fill="none" stroke="white" strokeWidth="0.6"/>
                </svg>
                <h2 className="text-3xl font-bold text-center text-white whitespace-nowrap relative z-10"
                  style={{ textShadow:"0 2px 12px rgba(0,0,0,.2)" }}>Почему мы?</h2>
              </div>
              <div className="flex flex-col gap-1 mt-4 pl-2">
                <div className="h-[2px] w-full rounded-full" style={accentBar} />
                <div className="h-[1px] w-3/4 rounded-full" style={{ background:"rgba(220,167,242,.3)" }} />
                <div className="h-[1px] w-1/2 rounded-full" style={{ background:"rgba(220,167,242,.15)" }} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 flex-1">
              <WhyCard icon={Brain}       title="Глубокая экспертиза"       desc="Мы специализируемся исключительно на миграционном законодательстве Казахстана." />
              <WhyCard icon={History}     title="10+ лет опыта"             desc="С 2014 года мы помогли более 12 000 иностранным гражданам." />
              <WhyCard icon={CheckCircle} title="Гарантированный результат" desc="Заключаем официальный договор и берем на себя полную ответственность." />
              <WhyCard icon={Eye}         title="Прозрачные условия"        desc="Стоимость услуг фиксируется в договоре с самого начала." />
            </div>
          </div>
        </Section>

        {/* ══════ PAYMENT ══════ */}
        <Section py="py-12">
          <PaymentVariants />
        </Section>

        {/* ══════ BLOG ══════ */}
        <Section py="py-12">
          <SectionHeader eyebrow="Полезно знать" title="Вопросы"
            subtitle="Актуальные гайды и новости миграционного законодательства" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogCard
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYOf_hW1pOQ-GdqE4Hue0hTpVJIeYNNF-9pSDwS4PYlIvVOdJmg4ux31OXFcCJjvUOSC90XMPgfchtZhVR4wL16CDkNpUyuw-FA1nlwJCoe15Ek9t34KGv6UhFJYvJd8TOYKKEu99JAMshcxHz4GUAB7NbaroGJ31HSVqYtEWYNYZK-Bee_ZQTmMzY4XHiKvdoJa1YA7VpzbR6HjSvl_0hImV-ZN1SeV0l2-eI8zzcb2I_Z4p0d73MbtvKYyX_2ib8RGR46JNSQc"
              badge="Гайд" title="Как получить ВНЖ в Казахстане в 2026 году?"
              excerpt="Подробная инструкция по сбору документов, срокам рассмотрения и основным требованиям для получения вида на жительство..."
              date="12 Октября 2026" />
            <BlogCard
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8QF-dedHBSPL-QG5238jDF-6frXS5LdTOBaesD08gjVXWIY-mDiu_tTCZJMaSHWPLCXnZAouFLF_TZ1ZEfeTTAOCIxDh5cMa9IuaHnpbhR80ZHEVMMmunBOd_Ym5I2nHhMYKkjzNNKW1FXHdDzj45eRD_wWLlL0zLpSgEu7OovQS-8AK0gZmHFAthI8ql0Zm3-YLv-V3pEpihE9eIEjH17srx__7w5g3oVzcU_Ab8V-vcpd0HZ9CknpoDXEHjrfO8riU4xSH6-o"
              badge="Бизнес" title="Digital Nomad Visa: Новые возможности для IT"
              excerpt="Казахстан запустил программу для цифровых кочевников. Разбираемся, кто может претендовать и какие льготы это дает..."
              date="05 Октября 2026" />
            <BlogCard
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE8JWIqZxdXbN47Jxtwla685FfeS2LhXQT1qyh9leH4msvAFnAlh0mE_spieXkzZH1ShFnjgpQF8-N0L1HsJkxeu5aZku3yT87wexyhKR_MtdSN4Med6fbS8g5FZ7n_moZ1obfQDvIDEXlEf8P13kbKHw5mN1LemXM77DBD_AecKW9R6XHDhSflZWhmMEPyxfk6qtND0SRVkjdJWsGLk0-eHx8_DUS0ddMfJYLx26taLWyA0Qv2EPFoNQh3k2PpGDj9HKfTF0BIE"
              badge="Законодательство" title="Изменения в миграционном учете"
              excerpt="Важные поправки в законодательстве РК, которые вступают в силу с начала следующего месяца. О чем нужно знать иностранцам..."
              date="28 Сентября 2026" />
          </div>
        </Section>

      </main>
    </div>
  );
}