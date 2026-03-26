"use client";

import Image from "next/image";
import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import VisaCalculatorModal, {
  VisaCalculatorButton,
} from "../visa-calculator/visa-calculator-modal";

const gradStyle = {
  background: "linear-gradient(135deg, #dca7f2 0%, #a855f7 45%, #7c3aed 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function Header() {
  return (
    <>
      <header className="py-2 lg:py-4 max-w-7xl mx-auto px-4">
        <div className="flex md:justify-between items-center border-b border-slate-200 pb-4 mb-4">
          <div className="w-full flex justify-between md:w-min items-center space-x-8">
            <div className="text-xl font-bold text-slate-800">
              <Link
                href="/"
                className="text-2xl md:text-3xl font-extrabold [text-shadow:0_2px_20px_rgba(168,85,247,.27)]"
                style={{
                  lineHeight: 1.07,
                  ...gradStyle,
                }}
              >
                VISAPRO
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <MapPin className="text-base h-5 w-5" />
              <span>Астана</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-4 text-slate-600">
              <span>Прием заявок онлайн 24/7</span>
            </div>
            <a
              href="https://wa.me/77073675161"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <span className="text-black">WhatsApp</span>
              <Image src={"/whatsapp.svg"} alt="" width={36} height={36} />
              <span className="font-semibold">+7 707 367 5161</span>
            </a>
          </div>
        </div>
        <div className="flex md:hidden flex-col space-x-2">
          <div className="flex items-center space-x-4 text-slate-600">
            <span>Прием заявок онлайн 24/7</span>
          </div>
          <a
            href="https://wa.me/77073675161"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center whitespace-nowrap"
          >
            <span className="text-slate-500">WhatsApp</span>
            <Image src={"/whatsapp.svg"} alt="" width={36} height={36} />
            <span className="font-semibold">+7 707 367 5161</span>
          </a>
        </div>

        <nav className="flex justify-between items-center mt-4">
          <div className="flex flex-col lg:flex-row space-y-2 md:space-x-4 lg:space-y-0">
            <Link
              className="text-slate-800 font-bold hover:text-primary transition text-lg"
              href="/"
            >
              Визы из Казахстана
            </Link>
            <Link
              className="text-slate-800 font-bold hover:text-primary transition text-lg"
              href="outsiders"
            >
              Для иностранных граждан
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <VisaCalculatorButton
              title="Бесплатная консультация"
              buttonOptions={{
                className:
                  "text-white z-10 font-semibold hidden sm:inline-block whitespace-nowrap px-4 py-2",
                // variant: 'outline',
                size: "lg",
              }}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
