import { THEME_TOKEN } from './style.service';
import { CONTENT_LOCATION } from './content.service';

export const ThemeProvider = {
   provide: THEME_TOKEN,
   useValue: { name: 'blue' },
};

export const ContentProvider = {
   provide: CONTENT_LOCATION,
   useValue: { path: 'assets/content/' },
};
