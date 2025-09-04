import React, { useState } from "react";
import { useUserStore } from "../../store/userStore";
import {userUseCase} from "../../domaine/usecase/user.usecase";
import SocialLogin from "../component/loginSocial";
import skylogo from "../../assets/sky.jpg";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const { name, email, password, setField } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userUseCase.registerUser();
    alert(`Compte enregistré :\n${name}, ${email}`);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Background geometric shapes - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/15 rounded-3xl rotate-12 blur-sm animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/20 rounded-2xl -rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 left-10 w-52 h-52 bg-white/10 rounded-full blur-md"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-white/25 rounded-2xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/15 rounded-xl -rotate-45 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-sm"></div>
      </div>

      {/* Main container */}
      <div className="flex min-h-screen lg:flex-row flex-col">
        {/* Left side - Logo and illustration - Made larger */}
        <div className="lg:w-7/12 w-full flex flex-col items-center justify-center p-8 lg:p-16 relative">
          {/* Logo */}
          <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-white font-bold text-2xl tracking-wider">SKYDESC</span>
            </div>
          </div>

          {/* Enhanced 3D Illustration */}
          <div className="max-w-2xl w-full mt-16 lg:mt-0 relative">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Image container with enhanced styling */}
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                <img
                  src={skylogo}
                  alt="3D Security Illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Decorative elements around image */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400/80 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400/80 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-green-400/80 rounded-full blur-sm animate-pulse"></div>
              </div>
            </div>

            {/* Welcome text under image */}
            <div className="text-center mt-8 space-y-2">
              <h2 className="text-white text-2xl lg:text-3xl font-bold">Bienvenue sur Skydesc</h2>
              <p className="text-white/80 text-lg">Votre plateforme de productivité</p>
            </div>
          </div>
        </div>

        {/* Right side - Form - Made larger */}
        <div className="lg:w-5/12 w-full flex flex-col justify-center p-6 lg:p-16 relative">
          {/* Sign in link */}
          <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-black/40 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20 shadow-xl">
            <span className="text-white text-sm">Déjà un compte?</span>
            <button className="ml-2 text-white font-semibold hover:text-blue-200 transition-colors">
              SE CONNECTER
            </button>
          </div>

          {/* Form container - Enhanced size */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl w-full max-w-lg mx-auto border border-white/30 mt-16 lg:mt-0">
            <div className="text-center mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Rejoignez Skydesc
              </h1>
              <p className="text-gray-600 text-lg font-light">Créez votre compte dès maintenant</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setField("name", e.target.value)}
                    className="w-full px-5 py-4 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-400/50 focus:border-purple-400 transition-all bg-white/90 backdrop-blur-sm text-lg"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full px-5 py-4 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-400/50 focus:border-purple-400 transition-all bg-white/90 backdrop-blur-sm text-lg"
                  />
                </div>

                {/* Password field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Mot de passe</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="8+ caractères"
                      value={password}
                      onChange={(e) => setField("password", e.target.value)}
                      className="w-full px-5 py-4 pr-14 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-400/50 focus:border-purple-400 transition-all bg-white/90 backdrop-blur-sm text-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Login button - Enhanced */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl hover:shadow-2xl">
                Créer mon compte
              </button>
            </form>

            {/* Social login section - Enhanced */}
            <div className="mt-10 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Ou continuez avec</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="w-14 h-14 bg-blue-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-200 border border-white/20 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="w-14 h-14 bg-blue-400/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-200 border border-white/20 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="w-14 h-14 bg-red-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-200 border border-white/20 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;