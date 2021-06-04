import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [CommonModule],
  exports: [TabsComponent, TabComponent],
  declarations: [TabsComponent, TabComponent],
  providers: [],
})
export class TabsModule {}
