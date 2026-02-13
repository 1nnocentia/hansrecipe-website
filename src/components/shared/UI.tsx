import React from 'react';
import { THEME } from '../../config/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all active:scale-95 flex items-center justify-center space-x-2";
  const variants = {
    primary: 'bg-sage text-white hover:bg-sage/90',
    outline: 'border border-sage text-sage hover:bg-sage/5',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ id?: string, bg?: string, className?: string, children: React.ReactNode }> = ({ id, bg = 'bg-transparent', className = '', children }) => (
  <section id={id} className={`py-24 ${bg} ${className} overflow-hidden`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export const Heading: React.FC<{ level?: 1 | 2 | 3, className?: string, children: React.ReactNode }> = ({ level = 2, className = '', children }) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  const sizes = {
    1: 'text-5xl md:text-7xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-2xl md:text-3xl',
  };
  
  return (
    <Tag className={`font-serif font-bold text-gray-900 ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
};
