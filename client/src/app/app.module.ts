import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './style.service';
import { ThemeProvider, ContentProvider } from './app-providers.module';
import { HomeComponent } from './home/home.component';
import { MarkdownRenderComponent } from './markdown-render/markdown-render.component';
import { ContentService } from './content.service';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      HeaderComponent,
      SideBarComponent,
      ContentComponent,
      FooterComponent,
      MarkdownRenderComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      MarkdownModule.forRoot({
         provide: MarkedOptions,
         useValue: {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
         },
      }),
   ],
   providers: [
      // Providers added before services
      ThemeProvider,
      ContentProvider,
      // Services added last
      ContentService,
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
