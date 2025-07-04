import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "",
    company: "",
    position: "",
    agreeTerms: false,
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log("Registration data:", formData);
    navigate("/login");
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Search" size={24} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Job Search</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Уже есть аккаунт?</span>
              <Link to="/login">
                <Button variant="outline">Войти</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Создать аккаунт
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Присоединяйтесь к тысячам соискателей и работодателей
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label htmlFor="userType" className="text-base font-medium">
                    Тип аккаунта
                  </Label>
                  <Select
                    value={formData.userType}
                    onValueChange={(value) =>
                      handleInputChange("userType", value)
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите тип аккаунта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jobseeker">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={16} />
                          Соискатель
                        </div>
                      </SelectItem>
                      <SelectItem value="employer">
                        <div className="flex items-center gap-2">
                          <Icon name="Building" size={16} />
                          Работодатель
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      Имя *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Введите ваше имя"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Фамилия *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Введите вашу фамилию"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+7 (999) 123-45-67"
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Company Information (for employers) */}
                {formData.userType === "employer" && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">
                      Информация о компании
                    </h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          Название компании *
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder="ООО 'Название компании'"
                          className="h-12"
                          required={formData.userType === "employer"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="position"
                          className="text-sm font-medium"
                        >
                          Ваша должность *
                        </Label>
                        <Input
                          id="position"
                          type="text"
                          value={formData.position}
                          onChange={(e) =>
                            handleInputChange("position", e.target.value)
                          }
                          placeholder="HR-менеджер, Руководитель отдела"
                          className="h-12"
                          required={formData.userType === "employer"}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Password */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Пароль *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      placeholder="Минимум 8 символов"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium"
                    >
                      Подтвердите пароль *
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      placeholder="Повторите пароль"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeTerms", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="agreeTerms"
                      className="text-sm text-gray-700"
                    >
                      Я согласен с{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline"
                      >
                        условиями использования
                      </Link>{" "}
                      и{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:underline"
                      >
                        политикой конфиденциальности
                      </Link>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        handleInputChange("newsletter", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm text-gray-700"
                    >
                      Получать уведомления о новых вакансиях на email
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-medium"
                    disabled={!formData.agreeTerms}
                  >
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Создать аккаунт
                  </Button>

                  <div className="text-center">
                    <span className="text-gray-600">Уже есть аккаунт? </span>
                    <Link
                      to="/login"
                      className="text-primary hover:underline font-medium"
                    >
                      Войти
                    </Link>
                  </div>
                </div>
              </form>

              {/* Social Registration */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">или</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-12">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <Icon name="Github" size={20} className="mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Register;
