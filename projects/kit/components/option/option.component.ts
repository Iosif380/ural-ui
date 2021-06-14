import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { OptionMixinBase } from './option.mixin';

@Component({
  selector: 'u-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  host: {
    role: 'option',
  },
  inputs: ['value', 'disabled'],
  outputs: ['onSelectionChange'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UOption extends OptionMixinBase {
  constructor(private element: ElementRef<HTMLElement>, private changeDetector: ChangeDetectorRef) {
    super(element, changeDetector);
  }
}
