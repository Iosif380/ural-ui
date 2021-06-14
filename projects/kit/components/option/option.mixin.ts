import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { HasDisabledConstructor, mixinDisabled } from 'projects/kit/core';
import { castBooleanProperty } from 'projects/kit/core/utils';

export class Option {
  public value: unknown;

  public get selected(): boolean {
    return this._selected;
  }

  public set selected(v: boolean) {
    this._selected = castBooleanProperty(v);
    this.cd.markForCheck();
  }

  public readonly onSelectionChange = new EventEmitter<Option>();

  private _selected = false;

  constructor(private _element: ElementRef<HTMLElement>, private cd: ChangeDetectorRef) {}

  public selectToggle(): void {
    this.selected = !this.selected;
    this.emitSelectionChangeEvent();
  }

  public get viewValue(): string {
    return (this._getHostElement().textContent || '').trim();
  }

  private _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  private emitSelectionChangeEvent() {
    this.onSelectionChange.emit(this);
  }
}

type OptionMixin = HasDisabledConstructor & typeof Option;

export const OptionMixinBase: OptionMixin = mixinDisabled(Option);
