import { UserProfileComponent } from './user-profile.component';
import { DashboardModule } from './../dashboard/dashboard.module';
import { MenuFixoComponent } from './../dashboard/menu-fixo/menu-fixo.component';
import { UserProfileRouting } from './user-profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRouting,
    DashboardModule
  ]
})
export class UserProfileModule { }
