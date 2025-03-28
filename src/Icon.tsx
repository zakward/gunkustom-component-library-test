import * as React from 'react';

interface IconProps {
  name: 'star' | 'heart';
}

const Icon: React.FC<IconProps> = ({ name }: IconProps) => {
  return <span style={{ fontSize: '20px' }}>{name === 'star' ? '★' : '♥'}</span>;
};

export default Icon;
