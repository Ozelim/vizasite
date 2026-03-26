"use client"

import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function BidForm() {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
          <div className="md:w-1/2 p-6 lg:p-10 bg-primary text-white">
            <h2 className="text-4xl font-black mb-6">
              Оставить заявку на услугу
            </h2>
            <p className="opacity-90 mb-8">
              Получите бесплатную консультацию по оформлению виз и миграционным
              вопросам. Мы ответим на все ваши вопросы в течение 15 минут.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="opacity-70" size={20} />
                <span>+7 (707) 367-51-61</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="opacity-70" size={20} />
                <span>a.nsk_75@bk.ru</span>
              </div>
            </div>
            <div className="text-white">
              <p className="opacity-90 mt-4">
                Или свяжитесь с нами любым удобным Вам способом
              </p>
              <div className="my-6 flex space-x-4">
                <a
                  className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                  href="https://wa.me/77073675161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 text-emerald-300 h-5 w-5" />
                  WhatsApp
                </a>
                {/* <a
              className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
              href="#"
            >
              <SendPlaneIcon className="mr-2 text-emerald-300 h-5 w-5" />
              Telegram
            </a> */}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-6 lg:p-16 space-y-6 bg-white ">
            <div>
              <label className="block text-sm font-bold mb-2">Имя</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow"
                placeholder="Введите ваше имя"
                type="text"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">№ телефона</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow"
                placeholder="+7 (___) ___-__-__"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Выбрать услугу
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow">
                <option>Виза (краткосрочная/долгосрочная)</option>
                <option>РВП (разрешение на временное проживание)</option>
                <option>ВНЖ (вид на жительство)</option>
                <option>Регистрация иностранного гражданина</option>
                <option>Разрешение на работу</option>
                <option>Приглашение для визы</option>
                <option>Продление документов</option>
              </select>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold soft-shadow shadow-lg transition-all">
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
