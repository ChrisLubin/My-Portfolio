import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PortfolioProjectComponent } from '../project/project.component';
import { PortfolioChangelogComponent } from 'src/changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioProjectComponent,
    PortfolioChangelogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
