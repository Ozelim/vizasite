"use client"

import React from 'react'
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
import { ChevronLeft, ChevronRight, Check, Phone, User, Search, FileText, Home, UserCheck, Briefcase, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceTypes = [
  { value: "visa", label: "Виза (краткосрочная/долгосрочная)", icon: FileText },
  { value: "rvp", label: "РВП (разрешение на временное проживание)", icon: Home },
  { value: "vnj", label: "ВНЖ (вид на жительство)", icon: Home },
  { value: "registration", label: "Регистрация иностранного гражданина", icon: UserCheck },
  { value: "work_permit", label: "Разрешение на работу", icon: Briefcase },
  { value: "invitation", label: "Приглашение для визы", icon: FileText },
  { value: "extension", label: "Продление документов", icon: Clock },
]

const countries = [
  { continent: "Европа", items: ["Германия", "Франция", "Италия", "Испания", "Великобритания", "Нидерланды", "Швейцария", "Австрия", "Польша", "Чехия", "Португалия", "Греция", "Бельгия", "Швеция", "Норвегия", "Дания", "Финляндия", "Ирландия", "Венгрия", "Румыния", "Болгария", "Хорватия", "Словакия", "Словения", "Литва", "Латвия", "Эстония", "Кипр", "Мальта", "Люксембург", "Исландия", "Сербия", "Черногория", "Северная Македония", "Албания", "Босния и Герцеговина"] },
  { continent: "Азия", items: ["Китай", "Япония", "Южная Корея", "Сингапур", "ОАЭ", "Таиланд", "Вьетнам", "Индия", "Малайзия", "Индонезия", "Филиппины", "Турция", "Израиль", "Саудовская Аравия", "Катар", "Кувейт", "Бахрейн", "Оман", "Иордания", "Ливан", "Тайвань", "Гонконг", "Макао", "Шри-Ланка", "Непал", "Бангладеш", "Пакистан", "Камбоджа", "Мьянма", "Лаос", "Монголия", "Казахстан", "Узбекистан", "Кыргызстан", "Таджикистан", "Туркменистан", "Азербайджан", "Грузия", "Армения"] },
  { continent: "Северная Америка", items: ["США", "Канада", "Мексика", "Куба", "Доминиканская Республика", "Ямайка", "Багамские острова", "Коста-Рика", "Панама", "Гватемала", "Гондурас", "Сальвадор", "Никарагуа", "Белиз", "Гаити", "Тринидад и Тобаго", "Барбадос"] },
  { continent: "Южная Америка", items: ["Бразилия", "Аргентина", "Чили", "Колумбия", "Перу", "Венесуэла", "Эквадор", "Боливия", "Парагвай", "Уругвай", "Гайана", "Суринам"] },
  { continent: "Африка", items: ["Египет", "Марокко", "Тунис", "ЮАР", "Кения", "Танзания", "Эфиопия", "Нигерия", "Гана", "Сенегал", "Маврикий", "Мадагаскар", "Алжир", "Ливия", "Намибия", "Ботсвана", "Зимбабве", "Мозамбик", "Ангола", "Камерун", "Кот-д'Ивуар", "Уганда", "Руанда"] },
  { continent: "Океания", items: ["Австралия", "Новая Зеландия", "Фиджи", "Папуа — Новая Гвинея", "Самоа", "Тонга", "Вануату", "Соломоновы острова", "Новая Каледония", "Французская Полинезия", "Гуам", "Палау"] },
]

const tripPurposes = [
  { value: "tourism", label: "Туризм" },
  { value: "work", label: "Работа" },
  { value: "study", label: "Учеба" },
  { value: "business", label: "Бизнес" },
]

const stayDurations = [
  { value: "up_to_30", label: "До 30 дней" },
  { value: "30_90", label: "30-90 дней" },
  { value: "90_180", label: "90-180 дней" },
  { value: "180_plus", label: "Более 180 дней" },
  { value: "1_year", label: "1 год" },
  { value: "long_term", label: "Долгосрочная" },
]

const rvpBases = [
  { value: "work_contract", label: "Трудовой договор" },
  { value: "study", label: "Учеба" },
  { value: "business", label: "Бизнес" },
  { value: "family", label: "Воссоединение семьи" },
]

const workTypes = [
  { value: "qualified", label: "Квалифицированный специалист" },
  { value: "seasonal", label: "Сезонная работа" },
  { value: "construction", label: "Строительство" },
  { value: "service", label: "Сфера услуг" },
  { value: "it", label: "IT-специалист" },
  { value: "other", label: "Другое" },
]

const contractDurations = [
  { value: "up_to_3", label: "До 3 месяцев" },
  { value: "3_6", label: "3-6 месяцев" },
  { value: "6_12", label: "6-12 месяцев" },
  { value: "1_year_plus", label: "Более 1 года" },
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

export function VisaCalculatorButton({title, buttonOptions}) {

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <Button
        {...buttonOptions}
        onClick={setIsModalOpen}
      >
        {title}
      </Button>
      <VisaCalculatorModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  )
}

export default function VisaCalculatorModal({ open, onOpenChange }) {
  const [step, setStep] = React.useState(1)
  const [countrySearch, setCountrySearch] = React.useState("")
  const [formData, setFormData] = React.useState({
    serviceType: "",
    country: "",
    tripPurpose: "",
    stayDuration: "",
    rvpBase: "",
    familyMembers: "",
    workType: "",
    contractDuration: "",
    applicants: "",
    services: [],
    name: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const getSteps = () => {
    const baseSteps = ["service"]
    
    if (formData.serviceType === "visa") {
      baseSteps.push("country", "purpose", "duration")
    } else if (formData.serviceType === "rvp" || formData.serviceType === "vnj") {
      baseSteps.push("rvp_base", "family_members")
    } else if (formData.serviceType === "work_permit") {
      baseSteps.push("work_type", "contract_duration")
    } else if (formData.serviceType === "registration" || formData.serviceType === "invitation" || formData.serviceType === "extension") {
      // No additional steps for these services
    }
    
    baseSteps.push("applicants", "additional_services", "contact")
    return baseSteps
  }

  const steps = getSteps()
  const totalSteps = steps.length
  const currentStepName = steps[step - 1]

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
        serviceType: "",
        country: "",
        tripPurpose: "",
        stayDuration: "",
        rvpBase: "",
        familyMembers: "",
        workType: "",
        contractDuration: "",
        applicants: "",
        services: [],
        name: "",
        phone: "",
      })
      setIsSubmitted(false)
      setCountrySearch("")
    }, 300)
  }

  const canProceed = () => {
    switch (currentStepName) {
      case "service":
        return formData.serviceType !== ""
      case "country":
        return formData.country !== ""
      case "purpose":
        return formData.tripPurpose !== ""
      case "duration":
        return formData.stayDuration !== ""
      case "rvp_base":
        return formData.rvpBase !== ""
      case "family_members":
        return formData.familyMembers !== ""
      case "work_type":
        return formData.workType !== ""
      case "contract_duration":
        return formData.contractDuration !== ""
      case "applicants":
        return formData.applicants !== ""
      case "additional_services":
        return true
      case "contact":
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

  const getStepTitle = () => {
    switch (currentStepName) {
      case "service":
        return "Выберите услугу"
      case "country":
        return "Страна гражданства"
      case "purpose":
        return "Цель поездки"
      case "duration":
        return "Срок пребывания"
      case "rvp_base":
        return "Основание для РВП/ВНЖ"
      case "family_members":
        return "Количество членов семьи"
      case "work_type":
        return "Тип работы"
      case "contract_duration":
        return "Срок действия договора"
      case "applicants":
        return "Количество заявителей"
      case "additional_services":
        return "Дополнительные услуги"
      case "contact":
        return "Ваши контактные данные"
      default:
        return ""
    }
  }

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
          <DialogTitle className="text-foreground">Калькулятор услуг</DialogTitle>
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
          {/* Step: Service Type */}
          {currentStepName === "service" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <div className="space-y-2">
                {serviceTypes.map((service) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.value}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, serviceType: service.value }))
                        setStep(1) // Reset to recalculate steps
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors",
                        formData.serviceType === service.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">{service.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step: Country (for Visa) */}
          {currentStepName === "country" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
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

          {/* Step: Trip Purpose (for Visa) */}
          {currentStepName === "purpose" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <RadioGroup
                value={formData.tripPurpose}
                onValueChange={(value) => setFormData(prev => ({ ...prev, tripPurpose: value }))}
                className="space-y-2"
              >
                {tripPurposes.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.tripPurpose === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, tripPurpose: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={`purpose-${option.value}`} />
                    <Label htmlFor={`purpose-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Stay Duration (for Visa) */}
          {currentStepName === "duration" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <RadioGroup
                value={formData.stayDuration}
                onValueChange={(value) => setFormData(prev => ({ ...prev, stayDuration: value }))}
                className="space-y-2"
              >
                {stayDurations.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.stayDuration === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, stayDuration: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={`duration-${option.value}`} />
                    <Label htmlFor={`duration-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: RVP/VNJ Base */}
          {currentStepName === "rvp_base" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <RadioGroup
                value={formData.rvpBase}
                onValueChange={(value) => setFormData(prev => ({ ...prev, rvpBase: value }))}
                className="space-y-2"
              >
                {rvpBases.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.rvpBase === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, rvpBase: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={`rvp-${option.value}`} />
                    <Label htmlFor={`rvp-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Family Members */}
          {currentStepName === "family_members" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <p className="text-sm text-muted-foreground">Укажите количество членов семьи, если это применимо</p>
              <RadioGroup
                value={formData.familyMembers}
                onValueChange={(value) => setFormData(prev => ({ ...prev, familyMembers: value }))}
                className="space-y-2"
              >
                {["0", "1", "2", "3", "4", "5+"].map((num) => (
                  <div
                    key={num}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.familyMembers === num
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, familyMembers: num }))}
                  >
                    <RadioGroupItem value={num} id={`family-${num}`} />
                    <Label htmlFor={`family-${num}`} className="cursor-pointer flex-1 text-foreground">
                      {num === "0" ? "Без членов семьи" : num === "5+" ? "5 и более" : num}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Work Type */}
          {currentStepName === "work_type" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <RadioGroup
                value={formData.workType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, workType: value }))}
                className="space-y-2"
              >
                {workTypes.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.workType === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, workType: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={`work-${option.value}`} />
                    <Label htmlFor={`work-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Contract Duration */}
          {currentStepName === "contract_duration" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
              <RadioGroup
                value={formData.contractDuration}
                onValueChange={(value) => setFormData(prev => ({ ...prev, contractDuration: value }))}
                className="space-y-2"
              >
                {contractDurations.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg border px-4 py-3 transition-colors cursor-pointer",
                      formData.contractDuration === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => setFormData(prev => ({ ...prev, contractDuration: option.value }))}
                  >
                    <RadioGroupItem value={option.value} id={`contract-${option.value}`} />
                    <Label htmlFor={`contract-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Number of Applicants */}
          {currentStepName === "applicants" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
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
                    <RadioGroupItem value={option.value} id={`applicants-${option.value}`} />
                    <Label htmlFor={`applicants-${option.value}`} className="cursor-pointer flex-1 text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step: Additional Services */}
          {currentStepName === "additional_services" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
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

          {/* Step: Contact Info */}
          {currentStepName === "contact" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">{getStepTitle()}</h3>
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