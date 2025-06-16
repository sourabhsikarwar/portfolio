import React from 'react';
import classNames from 'classnames';
import Pill from './Pill';

const PillsContainer = ({
  items,
  className = '',
  size = 'sm',
  variant = 'glass',
  onClick,
  gap = 'gap-2',
}) => {
  const containerClasses = classNames(
    'flex flex-wrap',
    gap,
    className
  );

  return (
    <div className={containerClasses}>
      {items.map((item, index) => (
        <Pill
          key={index}
          size={size}
          variant={variant}
          onClick={onClick}
        >
          {item}
        </Pill>
      ))}
    </div>
  );
};

export default PillsContainer; 