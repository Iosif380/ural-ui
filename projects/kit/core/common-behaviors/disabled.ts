import { castBooleanProperty } from '../utils';
import { Constructor } from './constructor';
import { EmptyObjectConstructor } from './empty-object';

export interface HasDisabled {
  disabled: boolean;
}

export type HasDisabledConstructor = Constructor<HasDisabled>;

export function mixinDisabled<T extends EmptyObjectConstructor>(
  base: T
): HasDisabledConstructor & T {
  return class extends base {
    private _disabled = false;

    public get disabled() {
      return this._disabled;
    }
    public set disabled(value: any) {
      this._disabled = castBooleanProperty(value);
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
