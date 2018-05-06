import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './style.service';
import { ThemeProvider } from './app-providers.module';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [AppComponent, HomeComponent],
   imports: [BrowserModule, AppRoutingModule],
   providers: [ThemeProvider],
   bootstrap: [AppComponent],
})
export class AppModule {}
