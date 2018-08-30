import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './router/app-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { PageSelectorComponent } from './page-selector/page-selector.component';
import { SelectorItemComponent } from './selector-item/selector-item.component';
import { GlobalsService } from './services/globals.service';
import { SelectorGroupComponent } from './selector-group/selector-group.component';
import { SelectorService } from './services/selector.service';
import { PointsGaugeComponent } from './generic-components/points-gauge/points-gauge.component';
import { SpecialistGaugeComponent } from './generic-components/specialist-gauge/specialist-gauge.component';
import { GaugeStylesComponent } from './generic-components/gauge-styles/gauge-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectorComponent,
    MenubarComponent,
    FooterbarComponent,
    LeftsidebarComponent,
    PageSelectorComponent,
    SelectorItemComponent,
    SelectorGroupComponent,
    PointsGaugeComponent,
    SpecialistGaugeComponent,
    GaugeStylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalsService,
    SelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
