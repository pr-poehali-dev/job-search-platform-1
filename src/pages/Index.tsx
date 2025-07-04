import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("vacancies");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Нижний Новгород",
    "Казань",
    "Челябинск",
    "Омск",
    "Самара",
    "Ростов-на-Дону",
  ];

  const vacancies = [
    {
      id: 1,
      title: "Frontend разработчик",
      company: "Яндекс",
      city: "Москва",
      salary: "150 000 - 250 000 ₽",
      experience: "3-5 лет",
      type: "Полная занятость",
      skills: ["React", "TypeScript", "JavaScript"],
    },
    {
      id: 2,
      title: "Python разработчик",
      company: "Сбер",
      city: "Санкт-Петербург",
      salary: "120 000 - 200 000 ₽",
      experience: "2-4 года",
      type: "Полная занятость",
      skills: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 3,
      title: "UI/UX дизайнер",
      company: "Ozon",
      city: "Москва",
      salary: "80 000 - 150 000 ₽",
      experience: "1-3 года",
      type: "Полная занятость",
      skills: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      id: 4,
      title: "DevOps инженер",
      company: "Тинькофф",
      city: "Екатеринбург",
      salary: "160 000 - 280 000 ₽",
      experience: "3-6 лет",
      type: "Полная занятость",
      skills: ["Docker", "Kubernetes", "AWS"],
    },
  ];

  const resumes = [
    {
      id: 1,
      name: "Алексей Иванов",
      position: "Frontend разработчик",
      city: "Москва",
      experience: "4 года",
      salary: "180 000 ₽",
      skills: ["React", "Vue.js", "TypeScript"],
    },
    {
      id: 2,
      name: "Мария Петрова",
      position: "Python разработчик",
      city: "Санкт-Петербург",
      experience: "3 года",
      salary: "140 000 ₽",
      skills: ["Python", "FastAPI", "PostgreSQL"],
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      position: "UX/UI дизайнер",
      city: "Новосибирск",
      experience: "2 года",
      salary: "90 000 ₽",
      skills: ["Figma", "Prototyping", "User Research"],
    },
    {
      id: 4,
      name: "Елена Козлова",
      position: "DevOps инженер",
      city: "Казань",
      experience: "5 лет",
      salary: "200 000 ₽",
      skills: ["Docker", "Kubernetes", "Terraform"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Search" size={24} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Job Search</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/login")}>Войти</Button>
              <Button onClick={() => navigate("/register")}>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Найдите работу мечты
              </h2>
              <p className="text-gray-600 text-lg">
                Более 10 000 вакансий и резюме от ведущих компаний
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по должности или компании"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="w-full md:w-64">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-12 px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="vacancies" className="flex items-center gap-2">
              <Icon name="Briefcase" size={20} />
              Вакансии
            </TabsTrigger>
            <TabsTrigger value="resumes" className="flex items-center gap-2">
              <Icon name="User" size={20} />
              Резюме
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vacancies" className="space-y-8">
            {/* Popular Jobs Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🔥 Популярные вакансии
                  </h3>
                  <p className="text-gray-600">
                    Самые востребованные позиции этой недели
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  Все популярные
                </Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {vacancies.slice(0, 6).map((vacancy) => (
                  <Card
                    key={vacancy.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
                    onClick={() => navigate(`/job/${vacancy.id}`)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg line-clamp-1">
                            {vacancy.title}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium text-gray-600 mt-1">
                            {vacancy.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {vacancy.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {vacancy.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {vacancy.postedAt}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-green-600">
                            {vacancy.salary}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Jobs Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Все вакансии
                </h3>
                <div className="flex items-center gap-4">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Зарплата" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-100k">50-100K</SelectItem>
                      <SelectItem value="100k-200k">100-200K</SelectItem>
                      <SelectItem value="200k+">200K+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Опыт" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-experience">Без опыта</SelectItem>
                      <SelectItem value="1-3">1-3 года</SelectItem>
                      <SelectItem value="3-6">3-6 лет</SelectItem>
                      <SelectItem value="6+">6+ лет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

            <div className="grid gap-4">
              {vacancies.map((vacancy) => (
                <Card
                  key={vacancy.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/job/${vacancy.id}`)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {vacancy.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-gray-700">
                          {vacancy.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{vacancy.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Icon name="MapPin" size={16} />
                          {vacancy.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {vacancy.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Banknote" size={16} />
                          {vacancy.salary}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {vacancy.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resumes" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Лучшие резюме
              </h3>
              <div className="flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Опыт" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="middle">Middle</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Зарплата" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k-100k">50-100K</SelectItem>
                    <SelectItem value="100k-200k">100-200K</SelectItem>
                    <SelectItem value="200k+">200K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4">
              {resumes.map((resume) => (
                <Card
                  key={resume.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-semibold">
                          {resume.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {resume.name}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-gray-700">
                            {resume.position}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">Доступен</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Icon name="MapPin" size={16} />
                          {resume.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {resume.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Banknote" size={16} />
                          от {resume.salary}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {resume.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Job Search</h3>
              <p className="text-gray-400">
                Платформа для поиска работы и талантов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для соискателей</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Поиск вакансий
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Создать резюме
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Карьерные советы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для работодателей</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Разместить вакансию
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Поиск кандидатов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Тарифы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            © 2024 Job Search. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;