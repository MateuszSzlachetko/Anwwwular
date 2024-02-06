export type Theme = {
  name: string;
  className: string;
  iconPath: string;
};

const light: Theme = {
  name: 'light',
  className: 'light-theme',
  iconPath: 'assets/light-theme-icon.svg',
};

const contrast: Theme = {
  name: 'contrast',
  className: 'contrast-theme',
  iconPath: 'assets/contrast-theme-icon.svg',
};

export const themes = {
  light,
  contrast,
} as const;
