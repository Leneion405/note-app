import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-xl p-8
        border border-gray-100
        w-full max-w-md
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
