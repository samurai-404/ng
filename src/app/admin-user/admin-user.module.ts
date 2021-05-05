import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AdminUserRoutes } from './admin-user.routing';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, MaterialModule, AdminUserRoutes],
  declarations: [ContentComponent, MenuComponent, ToggleComponent],
})
export class AdminUserModule {}
