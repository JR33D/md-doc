import { Component, Optional, Inject } from '@angular/core';
import { ThemeService, THEME_TOKEN, ITheme } from './style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ThemeService],
})
export class AppComponent {
  title = 'app';

  constructor(
    private styleService: ThemeService,
    @Optional()
    @Inject(THEME_TOKEN)
    private theme: ITheme,
  ) {}

  getStyleUrl() {
    return this.styleService.setProvidedTheme(this.theme.name);
  }
}
