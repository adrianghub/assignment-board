export const PossibleButtonSizes: ButtonSizes = {
  small: {
    padding: '6px 22px',
    fontSize: 16 / 16 + 'rem',
  },
  medium: {
    padding: '10px 30px',
    fontSize: 18 / 16 + 'rem',
  },
  large: {
    padding: '12px 38px',
    fontSize: 21 / 16 + 'rem',
  },
};

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'accent' | 'warn';
export type ButtonSizes = {
  [key in ButtonSize]: {
    padding: string;
    fontSize: string;
  };
};
