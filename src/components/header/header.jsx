"use client"

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
import { VisaCalculatorModal } from "../visa-calculator/vis-calculator-modal";
import { Button } from "../ui/button";

export default function Header () {

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <header className="py-2 lg:py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-slate-800">
              <Link href={"/"}>Visapro</Link>
            </div>

            <Link
              className="block md:hidden items-center text-slate-800 font-bold hover:text-primary transition whitespace-nowrap"
              href="about"
            >
              О компании
              {/* <ChevronDown className="text-lg ml-1 h-4 w-4" /> */}
            </Link>
            {/* <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
              <Image
                alt="Google logo"
                className="h-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUo_PMqqyd3J_24rAl683G_VVZ9JAJQKn9nGXflykMBFMwHETjdFAsl03LpsoPFuE9U1UqMvu_P2eKYwDqvFnBijhCuYwOEbqrPma8T9roQoC64DYWdvVH_av3zGRLgvsHRAt3z7R-NtRCsuwMsK5fs_FkGYJ8fBMInDlhtgfe74bsRC7e6Uu3rbaXFRwmDZBT7TOk3Kvzf5sWC798pJSpxeD78BtU_-BnhcpFF575tS3H7sj1g6GfkR8py9WpcCoWfUqbKaJhBfw"
                width={56}
                height={16}
                style={{ height: "1rem", width: "auto" }}
                unoptimized
              />
              <div className="flex items-center">
                <span>5.0</span>
                <div className="flex text-yellow-400 ml-1">
                  <Star className="text-sm h-4 w-4" fill="currentColor" />
                  <Star className="text-sm h-4 w-4" fill="currentColor" />
                  <Star className="text-sm h-4 w-4" fill="currentColor" />
                  <Star className="text-sm h-4 w-4" fill="currentColor" />
                  <Star className="text-sm h-4 w-4" fill="currentColor" />
                </div>
              </div>
            </div> */}
            <div className="hidden lg:flex items-center space-x-2 text-sm text-slate-500">
              <MapPin className="text-base h-5 w-5" />
              <span>Астана</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-4 text-slate-600">
              <span>Прием заявок онлайн 24/7</span>
            </div>
            <a
              href="https://wa.me/77073675161"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <span className="text-slate-500">WhatsApp</span>
              <Image src={"/whatsapp.svg"} alt="" width={36} height={36} />
              <span className="font-semibold">+7 707 367 5161</span>
            </a>
          </div>
        </div>
        <nav className="flex justify-between items-center">
          <div className="flex flex-col lg:flex-row space-x-6 space-y-3 lg:space-y-0">
            {/* <a
            className="flex items-center text-slate-800 font-bold hover:text-primary transition"
            href="#"
          >
            Помогаем
            <ChevronDown className="text-lg ml-1 h-4 w-4" />
          </a> */}
            {/* <Link
              className="hidden md:flex items-center text-slate-800 font-bold hover:text-primary transition"
              href="about"
            >
              О компании
            </Link> */}

            <Link
              className="text-slate-800 font-bold hover:text-primary transition"
              href="/"
              >
              Для граждан Казахстана
            </Link>
            <Link
              className="text-slate-800 font-bold hover:text-primary transition"
              href="outsiders"
            >
              Для иностранных граждан
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={setIsModalOpen}
              className="text-primary font-semibold hidden sm:inline-block whitespace-nowrap px-4 py-2"
              variant="outline"
            >
              Бесплатная консультация
            </Button>
          </div>
        </nav>
      </header>
      <VisaCalculatorModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
};
