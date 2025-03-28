// Button.tsx in your library
import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button style={{ backgroundColor: '#FF6B00', color: "white", height: "40px", width: "110px", borderRadius: '0px', fontSize: "16px" }}>
      {children}
    </button>
  );
}
