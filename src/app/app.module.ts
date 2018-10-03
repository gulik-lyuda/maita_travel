import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SectionMaitaTravelComponent } from './section-maita-travel/section-maita-travel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    MainSectionComponent,
    SectionMaitaTravelComponent,
    AboutUsComponent,
    OurStoryComponent,
    OurMissionComponent,
    OurServicesComponent,
    OurPortfolioComponent,
    ContactUsComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
