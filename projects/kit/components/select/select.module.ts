import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OptionModule } from '../option';
import { ClickOutsideDirective } from '@ural-ui/core/directives';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, OptionModule, BrowserAnimationsModule],
  declarations: [SelectComponent, ClickOutsideDirective],
  exports: [SelectComponent, OptionModule],
})
export class SelectModule {}
