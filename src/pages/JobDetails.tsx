import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const mockJob = {
  id: "1",
  title: "Senior Frontend Developer",
  company: "TechCorp",
  location: "Москва",
  salary: "250 000 - 350 000 ₽",
  type: "Полная занятость",
  experience: "3-6 лет",
  postedDate: "2 дня назад",
  description: `Мы ищем опытного Frontend разработчика для работы над инновационными проектами. 
  
В команде вы будете работать с современными технологиями и создавать пользовательские интерфейсы для миллионов пользователей.`,
  requirements: [
    "Опыт работы с React от 3 лет",
    "Знание TypeScript",
    "Опыт работы с Redux/MobX",
    "Понимание принципов UI/UX",
    "Опыт работы с REST API",
    "Знание Git",
    "Английский язык на уровне чтения документации",
  ],
  responsibilities: [
    "Разработка пользовательских интерфейсов",
    "Оптимизация производительности приложений",
    "Участие в код-ревью",
    "Менторство junior разработчиков",
    "Взаимодействие с дизайнерами и бэкенд-разработчиками",
  ],
  benefits: [
    "Официальное трудоустройство",
    "ДМС для сотрудника и семьи",
    "Гибкий рабочий график",
    "Удаленная работа",
    "Компенсация обучения",
    "Корпоративные мероприятия",
  ],
  companyInfo: {
    name: "TechCorp",
    description:
      "Ведущая IT-компания, специализирующаяся на разработке веб-приложений и мобильных решений.",
    employees: "500+ сотрудников",
    founded: "2015",
    website: "techcorp.com",
  },
};

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 hover:bg-blue-50"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к поиску
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900 mb-2">
                      {mockJob.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Building2" size={16} />
                        {mockJob.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        {mockJob.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {mockJob.postedDate}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{mockJob.type}</Badge>
                      <Badge variant="secondary">{mockJob.experience}</Badge>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        {mockJob.salary}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} />
                  Описание вакансии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {mockJob.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} />
                  Требования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Обязанности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="text-blue-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gift" size={20} />
                  Что мы предлагаем
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            <Card className="animate-fade-in sticky top-8">
              <CardContent className="pt-6">
                <Button
                  onClick={handleApply}
                  disabled={isApplied}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isApplied ? (
                    <>
                      <Icon name="Check" size={16} className="mr-2" />
                      Отклик отправлен
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} className="mr-2" />
                      Откликнуться
                    </>
                  )}
                </Button>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Icon name="Heart" size={16} className="mr-2" />В избранное
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Share2" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building2" size={20} />О компании
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {mockJob.companyInfo.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {mockJob.companyInfo.description}
                  </p>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-gray-500" />
                    <span className="text-gray-600">
                      {mockJob.companyInfo.employees}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-gray-500" />
                    <span className="text-gray-600">
                      Основана в {mockJob.companyInfo.founded}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Globe" size={16} className="text-gray-500" />
                    <span className="text-gray-600">
                      {mockJob.companyInfo.website}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
