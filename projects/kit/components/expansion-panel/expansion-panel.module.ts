import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionHeaderComponent } from './expansion-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpansionPanelComponent, ExpansionHeaderComponent],
  exports: [ExpansionPanelComponent, ExpansionHeaderComponent],
})
export class ExpansionPanelModule {}
