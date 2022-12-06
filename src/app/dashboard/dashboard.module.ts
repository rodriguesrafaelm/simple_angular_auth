import { PostsComponent } from './posts/posts.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuFixoComponent } from './menu-fixo/menu-fixo.component';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './friends/friends.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    MenuFixoComponent,
    FriendsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule

  ],
  exports: [MenuFixoComponent]
})
export class DashboardModule { }
