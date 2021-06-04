import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { castNumberProperty } from 'projects/kit/core/utils';

@Component({
  selector: 'u-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input()
  public get max(): number {
    return this._max;
  }
  public set max(v: number) {
    this._max = castNumberProperty(v, this._max);
  }

  @Input()
  public get min(): number {
    return this._min;
  }
  public set min(v: number) {
    this._min = castNumberProperty(v, this._min);
  }

  @Input()
  public get step(): number {
    return this._step;
  }
  public set step(v: number) {
    this._step = castNumberProperty(v, this._step);
  }

  @Input()
  public get value(): number {
    return this._value;
  }
  public set value(v: number) {
    this._value = castNumberProperty(v, this._value);
    this.valueChange.next(this._value);
  }

  @Output() public readonly valueChange: EventEmitter<number | null> = new EventEmitter<
    number | null
  >();

  private _max = 100;
  private _min = 0;
  private _step = 1;
  private _value = 0;
}
