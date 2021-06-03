import { ElementRef } from '@angular/core';
import {
  HasColorConstructor,
  HasDisabledConstructor,
  HasSizeConstructor,
  mixinColor,
  mixinDisabled,
  mixinSize,
} from 'projects/kit/core';

class Button {
  constructor(public _elementRef: ElementRef<HTMLButtonElement | HTMLAnchorElement>) {}
}

type ButtonMixin = HasDisabledConstructor &
  HasColorConstructor &
  HasSizeConstructor &
  typeof Button;

export const ButtonMixinBase: ButtonMixin = mixinDisabled(mixinSize(mixinColor(Button)));
