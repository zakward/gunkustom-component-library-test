import * as React from 'react';

// Allowed variants for background
export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'subtext' | 'error';

// Allowed font color override options
export type FontColorVariant = 'primary' | 'secondary';

// Mapping for background colors
const backgroundMapping: Record<ButtonVariant, string> = {
  primary: '#FF6B00',
  secondary: '#505040',
  text: '#141414',
  subtext: '#A1A1A1',
  error: '#FF0000',
};

// Default text colors (if no override is provided)
const defaultTextMapping: Record<ButtonVariant, string> = {
  primary: 'white',
  secondary: 'white',
  text: 'white',
  subtext: '#141414',
  error: 'white',
};

// Mapping for font color override: 
// "primary" forces text to black (#141414), "secondary" forces white.
const fontColorMapping: Record<FontColorVariant, string> = {
  primary: '#141414',
  secondary: 'white',
};

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  /**
   * Optional override for the text color.
   * "primary" forces black (#141414) and "secondary" forces white.
   */
  fontColor?: FontColorVariant;
  fontSize?: string | number;
  height?: string | number;
  width?: string | number;
  onClick?: () => void;
  /**
   * Additional inline styles. These will override default styles.
   */
  style?: React.CSSProperties;
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fontColor,
  fontSize,
  height,
  width,
  onClick,
  style,
  className,
}) => {
  const backgroundColor = backgroundMapping[variant];
  const textColor = fontColor ? fontColorMapping[fontColor] : defaultTextMapping[variant];

  const defaultStyles: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    fontSize,
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
    height: height || '40px',
    width: width || '110px',
  };

  // Merge defaultStyles with user-supplied styles. User styles override defaults.
  const mergedStyles: React.CSSProperties = { ...defaultStyles, ...style };

  return (
    <button style={mergedStyles} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
