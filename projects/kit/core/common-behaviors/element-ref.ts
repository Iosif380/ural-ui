import { ElementRef } from '@angular/core';
import { Constructor } from './constructor';

export interface HasElementRef {
  _elementRef: ElementRef;
}

export type HasElementRefConstructor = Constructor<HasElementRef>;
