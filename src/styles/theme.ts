import type { AccentColors, Colors, ThemeStyle } from 'types/theme';

const lightThemeColors: Colors = {
  base01: '#FFFFFF',
  base02: '#F1F5FA',
  base03: '#E7EEF6',
  base04: '#C6CFDD',
  base05: '#96A6BF',
  base06: '#1A1D26',
  text01: '#1A1D26',
  text02: '#96A6BF',
  red01: '#FFF2F2',
  gray25: '#fdfcfa',
  gray50: '#f1f1ed',
  gray100: '#f1f1ef',
  gray200: '#dedddc',
  gray300: '#d5d0bd',
  gray400: '#b3a982',
  gray500: '#918b74',
  gray600: '#6e6751',
  gray700: '#423c29',
  gray800: '#1e1b10',
  gray900: '#050503',
  primary25: '#ffffff',
  primary50: '#fbf9ef',
  primary100: '#fbf6e1',
  primary200: '#fdecad',
  primary300: '#f3d66f',
  primary400: '#fdd853',
  primary500: '#f9c919',
  primary600: '#c9a522',
  primary700: '#997e1d',
  primary800: '#635213',
  primary900: '#201c0d',
};

const darkThemeColors: Colors = {
  base01: '#1A1D26',
  base02: '#252935',
  base03: '#363C4D',
  base04: '#444860',
  base05: '#727E91',
  base06: '#FFFFFF',
  text01: '#FFFFFF',
  text02: '#727E91',
  red01: '#3F0303',
  gray25: '#fdfcfa',
  gray50: '#f1f1ed',
  gray100: '#f1f1ef',
  gray200: '#dedddc',
  gray300: '#d5d0bd',
  gray400: '#b3a982',
  gray500: '#918b74',
  gray600: '#6e6751',
  gray700: '#423c29',
  gray800: '#1e1b10',
  gray900: '#121210',
  primary25: '#ffffff',
  primary50: '#fbf9ef',
  primary100: '#fbf6e1',
  primary200: '#fdecad',
  primary300: '#f3d66f',
  primary400: '#fdd853',
  primary500: '#f9c919',
  primary600: '#c9a522',
  primary700: '#997e1d',
  primary800: '#635213',
  primary900: '#201c0d',
};

const accentColors: AccentColors = {
  purple01: '#7C4FFC',
  purple02: '#633FCA',
  primary500: '#F9C919',
  primary600: '#C9A522',
  white: '#FFFFFF',
  black: '#000000',
  green01: '#27BD69',
  green02: '#379A52',
  red: '#CD1A1A',
  blue01: '#4472DE',
  blue02: '#3B61BA',
};

const htmlFontSize = 10;

const h1En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.8rem',
  lineHeight: '3.4rem',
  letterSpacing: 'normal',
};
const h2En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.4rem',
  lineHeight: '2.9rem',
  letterSpacing: 'normal',
};
const h3En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.8rem',
  lineHeight: '2.2rem',
  letterSpacing: 'normal',
};
const h4En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.5rem',
  lineHeight: '1.8rem',
  letterSpacing: 'normal',
};
const h5En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.3rem',
  lineHeight: '1.6rem',
  letterSpacing: 'normal',
};
const h6En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.2rem',
  lineHeight: '1.5rem',
  letterSpacing: 'normal',
};
const h7En = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1rem',
  lineHeight: '1.2rem',
  letterSpacing: 'normal',
};

const h1Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.8rem',
  lineHeight: '3.5rem',
  letterSpacing: '-0.02em',
};
const h2Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.4rem',
  lineHeight: '3.0rem',
  letterSpacing: '-0.02em',
};
const h3Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.8rem',
  lineHeight: '2.3rem',
  letterSpacing: '-0.02em',
};
const h4Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.5rem',
  lineHeight: '1.9rem',
  letterSpacing: '-0.02em',
};
const h5Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.3rem',
  lineHeight: '1.6rem',
  letterSpacing: '-0.02em',
};
const h6Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.2rem',
  lineHeight: '1.5rem',
  letterSpacing: '-0.02em',
};
const h7Ko = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1rem',
  lineHeight: '1.2rem',
  letterSpacing: '-0.02em',
};

const h1n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.8rem',
  lineHeight: '4.1rem',
  letterSpacing: 'normal',
};
const h2n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '2.4rem',
  lineHeight: '3.5rem',
  letterSpacing: 'normal',
};
const h3n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.8rem',
  lineHeight: '2.6rem',
  letterSpacing: 'normal',
};
const h4n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.5rem',
  lineHeight: '2.2rem',
  letterSpacing: 'normal',
};
const h5n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  letterSpacing: 'normal',
};
const h6n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  letterSpacing: 'normal',
};
const h7n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1.1rem',
  lineHeight: '1.6rem',
  letterSpacing: 'normal',
};
const h8n = {
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  letterSpacing: 'normal',
};

const hEn = {
  h1: h1En,
  h2: h2En,
  h3: h3En,
  h4: h4En,
  h5: h5En,
  h6: h6En,
  h7: h7En,
};
const hKo = {
  h1: h1Ko,
  h2: h2Ko,
  h3: h3Ko,
  h4: h4Ko,
  h5: h5Ko,
  h6: h6Ko,
  h7: h7Ko,
};

const hn = { h1n, h2n, h3n, h4n, h5n, h6n, h7n, h8n };

export const darkEnTheme: ThemeStyle = {
  mode: 'dark',
  colors: darkThemeColors,
  accentColors,
  typography: {
    htmlFontSize,
    ...hEn,
    ...hn,
  },
};

export const darkKoTheme: ThemeStyle = {
  mode: 'dark',
  colors: darkThemeColors,
  accentColors,
  typography: {
    htmlFontSize,
    ...hKo,
    ...hn,
  },
};

export const lightEnTheme: ThemeStyle = {
  mode: 'light',
  colors: lightThemeColors,
  accentColors,
  typography: {
    htmlFontSize,
    ...hEn,
    ...hn,
  },
};

export const lightKoTheme: ThemeStyle = {
  mode: 'light',
  colors: lightThemeColors,
  accentColors,
  typography: {
    htmlFontSize,
    ...hKo,
    ...hn,
  },
};
