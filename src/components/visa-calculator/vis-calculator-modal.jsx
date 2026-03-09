"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, Check, Phone, User, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const countries = [
  { continent: "Европа", items: ["Германия", "Франция", "Италия", "Испания", "Великобритания", "Нидерланды", "Швейцария", "Австрия", "Польша", "Чехия", "Португалия", "Греция", "Бельгия", "Швеция", "Норвегия", "Дания", "Финляндия", "Ирландия", "Венгрия", "Румыния", "Болгария", "Хорватия", "Словакия", "Словения", "Литва", "Латвия", "Эстония", "Кипр", "Мальта", "Люксембург", "Исландия", "Сербия", "Черногория", "Северная Македония", "Албания", "Босния и Герцеговина"] },
  { continent: "Азия", items: ["Китай", "Япония", "Южная Корея", "Сингапур", "ОАЭ", "Таиланд", "Вьетнам", "Индия", "Малайзия", "Индонезия", "Филиппины", "Турция", "Израиль", "Саудовская Аравия", "Катар", "Кувейт", "Бахрейн", "Оман", "Иордания", "Ливан", "Тайвань", "Гонконг", "Макао", "Шри-Ланка", "Непал", "Бангладеш", "Пакистан", "Камбоджа", "Мьянма", "Лаос", "Монголия", "Казахстан", "Узбекистан", "Кыргызстан", "Таджикистан", "Туркменистан", "Азербайджан", "Грузия", "Армения"] },
  { continent: "Северная Америка", items: ["США", "Канада", "Мексика", "Куба", "Доминиканская Республика", "Ямайка", "Багамские острова", "Коста-Рика", "Панама", "Гватемала", "Гондурас", "Сальвадор", "Никарагуа", "Белиз", "Гаити", "Тринидад и Тобаго", "Барбадос"] },
  { continent: "Южная Америка", items: ["Бразилия", "Аргентина", "Чили", "Колумбия", "Перу", "Венесуэла", "Эквадор", "Боливия", "Парагвай", "Уругвай", "Гайана", "Суринам"] },
  { continent: "Африка", items: ["Египет", "Марокко", "Тунис", "ЮАР", "Кения", "Танзания", "Эфиопия", "Нигерия", "Гана", "Сенегал", "Маврикий", "Мадагаскар", "Алжир", "Ливия", "Намибия", "Ботсвана", "Зимбабве", "Мозамбик", "Ангола", "Камерун", "Кот-д'Ивуар", "Уганда", "Руанда"] },
  { continent: "Океания", items: ["Австралия", "Новая Зеландия", "Фиджи", "Папуа — Новая Гвинея", "Самоа", "Тонга", "Вануату", "Соломоновы острова", "Новая Каледония", "Французская Полинезия", "Гуам", "Палау"] },
]

const visaTypes = [
  { category: "Дипломатические и служебные визы", items: [
    { code: "A1", description: "для глав государств, правительств и членов официальных делегаций" },
    { code: "A2", description: "для сотрудников дипломатических миссий, консульств и международных организаций" },
    { code: "A3", description: "для официальных представителей иностранных государств и членов их семей" },
  ]},
  { category: "Инвестиционные визы", items: [
    { code: "B1", description: "для инвесторов, представителей инвесткомпаний" },
  ]},
  { category: "Бизнес-визы", items: [
    { code: "B2", description: "для деловых встреч, конференций, участия в переговорах" },
    { code: "B3", description: "для установки оборудования, предоставления услуг" },
  ]},
  { category: "Туристические визы", items: [
    { code: "B12", description: "краткосрочные визиты с туристической целью" },
  ]},
  { category: "Визы на лечение и частные визиты", items: [
    { code: "B10", description: "лечение" },
    { code: "B11", description: "частный визит (например, к родственникам)" },
  ]},
  { category: "Студенческие визы", items: [
    { code: "C9", description: "обучение в вузах, колледжах" },
  ]},
  { category: "Рабочие визы", items: [
    { code: "C3", description: "для лиц, прибывающих на работу" },
    { code: "C4", description: "для разных категорий трудовой деятельности" },
    { code: "C5", description: "для сезонных рабочих" },
    { code: "C6", description: "для специальных категорий работников" },
  ]},
  { category: "Визы на воссоединение семьи", items: [
    { code: "C2", description: "члены семьи иностранных граждан, проживающих в РК" },
  ]},
  { category: "Визы для ПМЖ", items: [
    { code: "C10", description: "для тех, кто получил разрешение на ПМЖ" },
  ]},
]

const applicantOptions = [
  { value: "1", label: "1 человек" },
  { value: "2", label: "2 человека" },
  { value: "family", label: "Семья" },
  { value: "group", label: "Группа" },
  { value: "other", label: "Другое" },
]

const additionalServices = [
  "Заполнение анкеты",
  "Бронь отеля",
  "Бронь авиабилетов",
  "Перевод документов",
  "Страхование",
  "Вызов специалиста",
  "Проверка документов",
  "Услуги для граждан РФ",
  "Работа за рубежом",
]

export function VisaCalculatorModal({ open, onOpenChange }) {
  const [step, setStep] = useState(1)
  const [countrySearch, setCountrySearch] = useState("")
  const [formData, setFormData] = useState({
    country: "",
    visaType: "",
    applicants: "",
    services: [],
    name: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setStep(1)
      setFormData({
        country: "",
        visaType: "",
        applicants: "",
        services: [],
        name: "",
        phone: "",
      })
      setIsSubmitted(false)
    }, 300)
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.country !== ""
      case 2:
        return formData.visaType !== ""
      case 3:
        return formData.applicants !== ""
      case 4:
        return true
      case 5:
        return formData.name.trim() !== "" && formData.phone.trim() !== ""
      default:
        return false
    }
  }

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const filteredCountries = countrySearch.trim() === ""
    ? countries
    : countries.map(region => ({
        ...region,
        items: region.items.filter(country =>
          country.toLowerCase().includes(countrySearch.toLowerCase())
        )
      })).filter(region => region.items.length > 0)

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Заявка отправлена!</h3>
            <p className="mb-6 text-muted-foreground">
              Спасибо, {formData.name}! Мы свяжемся с вами в ближайшее время через WhatsApp.
            </p>
            <Button onClick={handleClose} className="w-full">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-foreground">Калькулятор виз</DialogTitle>
          <DialogDescription>
            Шаг {step} из {totalSteps}
          </DialogDescription>
          {/* Progress bar */}
          <div className="flex gap-1.5 pt-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  i < step ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Step 1: Country */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Выберите страну</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск страны..."
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {filteredCountries.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Страна не найдена
                  </p>
                ) : filteredCountries.map((region) => (
                  <div key={region.continent}>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{region.continent}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {region.items.map((country) => (
                        <button
                          key={country}
                          onClick={() => setFormData(prev => ({ ...prev, country }))}
                          className={cn(
                            "rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                            formData.country === country
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50 text-foreground"
                          )}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Visa Type */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Выберите тип визы</h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {visaTypes.map((category) => (
                  <div key={category.category}>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{category.category}</p>
                    <div className="space-y-2">
                      {category.items.map((visa) => (
                        <button
                          key={visa.code}
                          onClick={() => setFormData(prev => ({ ...prev, visaType: visa.code }))}
                          className={cn(
                            "w-full rounded-lg border px-3 py-2 text-left transition-colors",
                            formData.visaType === visa.code
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <span className="font-medium text-foreground">{visa.code}</span>
                          <span className="text-sm text-muted-foreground"> — {visa.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Number of Applicants */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Количество заявителей</h3>
              <RadioGroup
                value={formData.applicants}
                onValueChange={(value) => setFormData(prev => ({ ...prev, applicants: value }))}
                className="space-y-2"
              >
                {applicantOptions.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.applicants === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, applicants: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Additional Services */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Дополнительные услуги</h3>
              <p className="text-sm text-muted-foreground">Выберите нужные услуги (необязательно)</p>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {additionalServices.map((service) => (
                  <div
                    key={service}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.services.includes(service)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => toggleService(service)}
                  >
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => toggleService(service)}
                    />
                    <Label htmlFor={service} className="cursor-pointer flex-1 text-foreground">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Contact Info */}
          {step === 5 && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Ваши контактные данные</h3>
              <p className="text-sm text-muted-foreground">
                Введите ваши данные для получения бесплатной консультации
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Имя</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Номер телефона (WhatsApp)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 pt-4 border-t">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Назад
            </Button>
          )}
          {step < totalSteps ? (
            <Button onClick={handleNext} disabled={!canProceed()} className="flex-1">
              Далее
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!canProceed()} className="flex-1">
              <Check className="mr-1 h-4 w-4" />
              Получить бесплатную консультацию
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
