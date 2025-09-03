import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import SocialLogin from '../component/loginSocial';
import { registerUser } from '../../core/config/counterSlice';
import skylogo from '../../assets/sky.jpg';



const LoginPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    alert("Compte enregistré !");
  };

  return (
    <div className="flex h-screen bg-red-700">
      {/* Illustration */}
      <div className="w-1/2 bg-white flex items-center justify-center p-10">
        <img
          src={skylogo}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Formulaire */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-10">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">FOCUS</h1>
        <h2 className="text-xl font-semibold mb-6">
          Welcome to Focus! Register your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="focus001@gmail.com"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="8+ characters"
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Register
          </button>
        </form>
        <h1 className="text-5xl font-bold text-red-500 bg-yellow-200 p-4">
  🎨 Test Couleurs
</h1>

        <div className="mt-6 text-center">
          <p className="mb-2">Create account with</p>
          <SocialLogin />
        </div>

        <div className="mt-6 text-right">
          <span className="text-sm">Already have an account?</span>
          <button className="ml-2 text-purple-600 font-semibold hover:underline">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
