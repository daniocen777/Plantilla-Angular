import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../../modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
// Material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
// Componentes
import { PostsComponent } from "src/app/modules/posts/posts.component";

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class DefaultModule {}
