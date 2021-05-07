import { Constructor } from './constructor';
import { HasElementRefConstructor } from './element-ref';
import { overwriteStyle } from '../utils/overwrite-style';

export type ColorPallet = 'primary' | 'accent' | 'custom';

export interface HasColor {
  color: ColorPallet;
}

export type HasColorConstructor = Constructor<HasColor>;

export function mixinColor<T extends HasElementRefConstructor>(base: T): HasColorConstructor & T {
  return class extends base {
    private _color!: ColorPallet;

    public get color(): ColorPallet {
      return this._color;
    }
    public set color(newColor: ColorPallet) {
      if (newColor && newColor !== this._color) {
        this.changeElementColor(this._color, newColor);
        this._color = newColor;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.color = 'primary';
    }

    private changeElementColor(oldColor: ColorPallet, newColor: ColorPallet): void {
      overwriteStyle(this._elementRef, `u-color-${oldColor}`, `u-color-${newColor}`);
    }
  };
}
