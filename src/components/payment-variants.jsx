import React from "react";
import { Banknote, CreditCard, Landmark } from "lucide-react";

const gradStyle = {
  color: "#5a2b8a",
};
const accentBar = { background: "linear-gradient(90deg, #dca7f2, #a855f7, #7c3aed)" };
const iconBg    = { background: "linear-gradient(135deg, rgba(220,167,242,0.18), rgba(168,85,247,0.12))" };

const methods = [
  { icon: Banknote,    label: "Наличными" },
  { icon: CreditCard,  label: "Банковской картой" },
  { icon: Landmark,    label: "По реквизитам (для юр. лиц)" },
];

export default function PaymentVariants() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* header */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#5a2b8a" }}>
          Удобно для вас
        </p>
        <h2 className="font-bold tracking-tight mb-2" style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1, ...gradStyle }}>
          Способы оплаты
        </h2>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-[2px] w-16 rounded-full" style={accentBar} />
          <div className="h-px w-8 rounded-full" style={{ background: "rgba(220,167,242,.3)" }} />
          <div className="h-px w-4 rounded-full" style={{ background: "rgba(220,167,242,.15)" }} />
        </div>
      </div>

      {/* pills */}
      <div className="flex flex-wrap gap-4 justify-center">
        {methods.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-white/80 backdrop-blur-sm flex items-center gap-4 py-5 px-8 rounded-2xl border transition-all duration-300 group cursor-default relative overflow-hidden"
            style={{ borderColor: "rgba(220,167,242,.2)", boxShadow: "0 2px 16px rgba(168,85,247,.08), 0 1px 3px rgba(0,0,0,.06)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(220,167,242,.55)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(168,85,247,.16), 0 2px 8px rgba(0,0,0,.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(220,167,242,.2)";  e.currentTarget.style.boxShadow = "0 2px 16px rgba(168,85,247,.08), 0 1px 3px rgba(0,0,0,.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {/* hover glow */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(220,167,242,.15) 0%, transparent 70%)" }} />
            {/* bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={accentBar} />

            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={iconBg}>
              <Icon size={24} style={{ color: "#a855f7" }} />
            </div>
            <span className="font-semibold text-base md:text-lg" style={{...gradStyle}}>{label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}