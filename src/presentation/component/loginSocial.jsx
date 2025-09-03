import React from 'react';
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className="flex justify-center space-x-4">
      <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
      <FaLinkedin className="text-blue-700 text-2xl cursor-pointer" />
      <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
    </div>
  );
};

export default SocialLogin;
