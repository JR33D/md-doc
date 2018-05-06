import { THEME_TOKEN } from './style.service';

export const ThemeProvider = {
  provide: THEME_TOKEN,
  useValue: { name: 'center' },
};
