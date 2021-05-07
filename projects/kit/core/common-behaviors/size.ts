import { Constructor } from './constructor';
import { HasElementRefConstructor } from './element-ref';
import { overwriteStyle } from '../utils/overwrite-style';

export type Size = 's' | 'm' | 'l' | 'xl' | 'custom';

export interface HasSize {
  size: Size;
}

export type HasSizeConstructor = Constructor<HasSize>;

export function mixinSize<T extends HasElementRefConstructor>(base: T): HasSizeConstructor & T {
  return class extends base {
    private _size!: Size;

    public get size(): Size {
      return this._size;
    }

    public set size(newSize: Size) {
      if (newSize && newSize !== this._size) {
        this.changeElementSize(this._size, newSize);
        this._size = newSize;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.size = 'l';
    }

    private changeElementSize(oldSize: Size, newSize: Size): void {
      overwriteStyle(this._elementRef, `u-size-${oldSize}`, `u-size-${newSize}`);
    }
  };
}
