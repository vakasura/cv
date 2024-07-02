import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white p-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        <a href="https://substack.com" target="_blank" rel="noopener noreferrer">
            <BsSubstack />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
