import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'solid',
  style = 'primary',
  className = '',
  size = 'md',
  href,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-300';
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const variants = {
    solid: {
      primary: 'bg-blue-gradient hover:opacity-90 text-black',
      secondary: 'bg-white hover:bg-white/80 text-black',
    },
    outlined: {
      primary: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
      secondary: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10',
    }
  };

  const buttonClasses = classNames(
    baseStyles,
    sizes[size],
    variants[variant][style],
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;