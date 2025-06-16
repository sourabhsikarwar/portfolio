import React from 'react';
import classNames from 'classnames';

const Pill = ({
  children,
  className = '',
  size = 'sm',
  variant = 'glass',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 transition-all duration-300';
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const variants = {
    glass: 'bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 text-white/90 dark:text-white/50 hover:bg-white/20 dark:hover:bg-white/20',
    solid: 'bg-blue-gradient text-white hover:opacity-90',
    outline: 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10'
  };

  const pillClasses = classNames(
    baseStyles,
    sizes[size],
    variants[variant],
    'rounded font-medium',
    className
  );

  return (
    <span
      className={pillClasses}
      onClick={() => onClick?.(children)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </span>
  );
};

export default Pill; 