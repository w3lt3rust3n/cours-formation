import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HtmlHeaderComponent } from './html-header/html-header.component';
import { LangChapterContainerComponent } from './lang-chapter-container/lang-chapter-container.component';
import { HtmlChapterOneComponent } from './html-chapter-one/html-chapter-one.component';
import { ContribComponent } from './contrib/contrib.component';
import { HtmlChapterTwoComponent } from './html-chapter-two/html-chapter-two.component';
import { LangChapterContainer2Component } from './lang-chapter-container2/lang-chapter-container2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HtmlHeaderComponent,
    LangChapterContainerComponent,
    HtmlChapterOneComponent,
    ContribComponent,
    HtmlChapterTwoComponent,
    LangChapterContainer2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
