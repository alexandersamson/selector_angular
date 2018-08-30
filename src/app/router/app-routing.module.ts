import { NgModule } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { RouterModule, Routes} from '@angular/router';
import {PageSelectorComponent} from '../page-selector/page-selector.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'selector', component: PageSelectorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
