import { Injectable, InjectionToken } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ITheme {
   /**
    * This is the name of the theme/css file minus the .css extension
    */
   name: string;
   /**
    * This is the path to the theme if it is not under `./assets/styles`; Code adds trailing `/` to path.
    */
   path?: string;
}

export const THEME_TOKEN = new InjectionToken<ITheme>('ThemeStyle');

@Injectable()
export class ThemeService {
   constructor(private sanitizer: DomSanitizer) {}

   public trustResourceStyle(stylePath: string): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(stylePath);
   }

   public setProvidedTheme(themeName: string) {
      return this.trustResourceStyle('./assets/styles/' + themeName + '.css');
   }

   public setCustomTheme(themeName: string, themePath: string) {
      return this.trustResourceStyle(themePath + '/' + themeName + '.css');
   }
}
