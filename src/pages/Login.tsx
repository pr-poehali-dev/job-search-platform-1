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
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Login data:", formData);
    navigate("/");
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
              <span className="text-gray-600">Нет аккаунта?</span>
              <Link to="/register">
                <Button variant="outline">Регистрация</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Добро пожаловать!
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Войдите в свой аккаунт
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="h-12"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Пароль
                    </Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Забыли пароль?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="Введите пароль"
                    className="h-12"
                    required
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      handleInputChange("rememberMe", checked as boolean)
                    }
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Запомнить меня
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-medium"
                  >
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Войти
                  </Button>

                  <div className="text-center">
                    <span className="text-gray-600">Нет аккаунта? </span>
                    <Link
                      to="/register"
                      className="text-primary hover:underline font-medium"
                    >
                      Создать аккаунт
                    </Link>
                  </div>
                </div>
              </form>

              {/* Social Login */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    или войдите с помощью
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Button variant="outline" className="h-12">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Продолжить с Google
                </Button>
                <Button variant="outline" className="h-12">
                  <Icon name="Github" size={20} className="mr-2" />
                  Продолжить с GitHub
                </Button>
              </div>

              {/* Additional Links */}
              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">
                  Входя в аккаунт, вы соглашаетесь с нашими{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Login Demo */}
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Info" size={20} className="text-blue-600" />
                <h3 className="font-medium text-blue-900">Демо-доступ</h3>
              </div>
              <p className="text-sm text-blue-800 mb-4">
                Для быстрого тестирования используйте:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-white/50 p-2 rounded">
                  <span className="text-blue-700">Соискатель:</span>
                  <code className="text-blue-900">demo@jobseeker.com</code>
                </div>
                <div className="flex justify-between items-center bg-white/50 p-2 rounded">
                  <span className="text-blue-700">Работодатель:</span>
                  <code className="text-blue-900">demo@employer.com</code>
                </div>
                <div className="flex justify-between items-center bg-white/50 p-2 rounded">
                  <span className="text-blue-700">Пароль:</span>
                  <code className="text-blue-900">demo123</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Login;
