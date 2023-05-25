import { NgModule } from '@angular/core';

// Módulos
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './404/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
