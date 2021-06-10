import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelPosition } from './label-position.enum';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input()
  public labelPosition: LabelPosition = LabelPosition.Right;

  public labelPositions = LabelPosition;

  public id: string;

  public checked!: boolean;

  private static _generateId: () => string;

  private _onChangeCb!: (checked: boolean) => void;

  constructor() {
    if (!CheckboxComponent._generateId) {
      CheckboxComponent._generateId = (function (startFrom: number) {
        let counter = startFrom;

        return function () {
          const id = `checkbox-component-${counter}`;
          counter += 1;

          return id;
        };
      })(0);
    }

    this.id = CheckboxComponent._generateId();
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: (checked: boolean) => void): void {
    this._onChangeCb = fn;
  }

  public handleChange(event: Event): void {
    const value = (event.target as HTMLInputElement).checked;
    this._onChangeCb(value);
  }

  public registerOnTouched(): void {
    //
  }
}
