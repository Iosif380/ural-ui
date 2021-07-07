import {
  HasDisabledConstructor,
  HasSizeConstructor,
  mixinDisabled,
  mixinSize,
} from '@ural-ui/core/common-behaviors';

import { ElementRef } from '@angular/core';

class Input {
  constructor(public _elementRef: ElementRef) {}
}

type InputMixin = HasDisabledConstructor & HasSizeConstructor & typeof Input;

export const InputMixinBase: InputMixin = mixinDisabled(mixinSize(Input));
