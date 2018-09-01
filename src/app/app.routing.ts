import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }, {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
      { path: 'table-list', component: TableListComponent, canActivate: [AuthGuard] },
      { path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
      { path: 'icons', component: IconsComponent, canActivate: [AuthGuard] },
      { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
      { path: 'savings', component: SavingsComponent, canActivate: [AuthGuard] },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
