import {
  HasDisabledConstructor,
  HasSizeConstructor,
  mixinDisabled,
  mixinSize,
} from 'projects/kit/core';

import { ElementRef } from '@angular/core';

class Input {
  constructor(public _elementRef: ElementRef) {}
}

type InputMixin = HasDisabledConstructor & HasSizeConstructor & typeof Input;

export const InputMixinBase: InputMixin = mixinDisabled(mixinSize(Input));
