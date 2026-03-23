import React from "react";
import Image from "next/image";
import {
  MapPin,
  Banknote,
  Send,
  Star,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Наши контакты
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <Image
                alt="Entrance to the office building"
                className="rounded-lg w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEZHb8QUz5F3KrrU7G5db4UjJxAKfULnKy7dzLpKAtAnumg7Vnp7SijC9Te4BTsQYHXcSkkROCn4X79HBTRISBtGV3ORZ9IaUe_VfI1Ttnxzblqsd9EegjrK_Ej9u81HSntHjU22_K8e6bv-0jiY5qbQTCPBlM89CMtQEX1A0QLkOOXTqt170K_QQBAVCMal5ewOKxryPqMhO33Q02VlaAGQEC9OVw_vqPTWmGW1wMwEVyCOBB5P3ljp--OqIVbYiQN5LlrYUb8MU"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <Image
                alt="Map showing office location"
                className="rounded-lg w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_h3Eb_eZ9r_KUZuYDKzUUM0J22JuGZQDctpHB-l-2uBBZsODLPOdY6a722jiG4ELB8nlV2qF0T9AvavTo2VGDMANvg6cPSyNjLbAwmc4CLmH0DyQRuxA0cf5r7IMGhEtMnHhxJE3oxDm_mY0cF3RBxlDCmQAtZcvyUgJWPvXm9wzCY8MAo6FBwC0HeGAJTiFLW21tyqE3juh-7GWKx1htTNMNPN7n7wohMJBX93-BiIBF9mHkelQUu-NQZD45f94NG9M8M7Yj1s"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <p className="mt-6 flex items-start text-slate-600">
              <MapPin className="text-primary mr-2 w-5 h-5 shrink-0" />
              город Астана
            </p>
            {/* --- Партнеры блок --- */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Партнеры</h3>
              <ul className="space-y-2 text-slate-600 text-base pl-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block"></span>
                  Ассоциация туристов Казахстана
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block"></span>
                  Туроператор “OzElim”
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block"></span>
                  Страховая компания “Номад Иншуранс”
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block"></span>
                  ТрансАвиа компания
                </li>
              </ul>
            </div>
            {/* --- Конец блока партнеров --- */}
          </div>
        </div>
        <div className="py-12 lg:mt-12 border-t border-slate-200">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-xl font-bold text-slate-800">
                VISAPRO
              </div>
              <p className="text-sm text-slate-500 mt-1">
              Официальный партнер - Ассоциация туристов Казахстана
              </p>
            </div>
            <div className="text-slate-800">
              <p className="text-2xl font-bold">+7 707 367 5161</p>
              <p className="text-sm">a.nsk_75@bk.ru</p>
            </div>
            <div className="text-slate-600">
              <p className="font-semibold text-slate-800">
                Режим работы
              </p>
              <p>Онлайн 24/7</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">
                Мы в соц.сетях
              </p>
              <div className="flex space-x-3">
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Send className="h-6 w-6" />
                </a>
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Send className="h-6 w-6" />
                </a>
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Send className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 pt-8 border-t border-slate-200 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                О компании
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Информация
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Новости
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Услуги
                  </a>
                </li>
              </ul>
            </div>

          </div> */}
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p>Визовая поддержка 24/7</p>
          </div>
        </div>
      </div>
    </footer>
  )
}