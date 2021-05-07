import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ButtonMixinBase } from './button.mixin';

const BUTTON_HOST_ATTRIBUTES = ['u-button'];

@Component({
  selector: 'button[u-button]',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.u-button-disabled]': 'disabled',
  },
  inputs: ['color', 'size', 'disabled'],
})
export class ButtonComponent extends ButtonMixinBase {
  private get hostElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.addCssClassByAttributes();
  }

  private addCssClassByAttributes(): void {
    for (const attribute of BUTTON_HOST_ATTRIBUTES) {
      if (this.hasHostAttributes(attribute)) {
        this.hostElement.classList.add(attribute);
      }
    }
  }

  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some((attribute) => this.hostElement.hasAttribute(attribute));
  }
}

@Component({
  selector: 'a[u-button]',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.u-button-disabled]': 'disabled',
    '(click)': 'disabledEvents($event)',
  },
  inputs: ['color', 'size', 'disabled'],
})
export class AnchorComponent extends ButtonComponent {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
  public disabledEvents(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
