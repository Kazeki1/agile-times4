import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule,  MenuItem } from 'primeng/primeng';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomerComponent } from './customers/customer.component';

import { StatisticComponent } from './statistic/statistic.component';
import { AlertModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'alltimes', component: AlltimesComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'customer', component: CustomerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlltimesComponent,
    TimesheetComponent,
    ProjectsComponent,
    ProfileComponent,
    SettingsComponent,
    StatisticComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MenuModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

