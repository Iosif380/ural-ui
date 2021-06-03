import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { InputMixinBase } from './input.mixin';

@Component({
  selector: '<input[u-input]/>, textarea[u-input],',
  exportAs: 'u-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.u-input-disabled]': 'disabled',
  },
  inputs: ['size', 'disabled'],
})
export class InputComponent extends InputMixinBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
