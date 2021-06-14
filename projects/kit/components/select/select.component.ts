import {
  Component,
  ChangeDetectionStrategy,
  QueryList,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { asapScheduler, from, Observable, scheduled } from 'rxjs';
import { mergeAll, pluck, tap } from 'rxjs/operators';
import { UOption, Option } from '../option';

@Component({
  selector: 'u-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() public value: unknown;

  @Output() public readonly valueChange: EventEmitter<unknown> = new EventEmitter();

  public viewValue!: Observable<string>;

  public get isEmptyList(): boolean {
    return !this.options.length;
  }

  public get hasOpen(): boolean {
    return this._opened && !this.isEmptyList;
  }

  @ContentChildren(UOption, { descendants: true }) public options!: QueryList<UOption>;

  private _opened = false;

  public ngAfterViewInit(): void {
    this.viewValue = this.getViewValueByOptions();
  }

  public open(): void {
    this._opened = true;
  }

  public close(): void {
    this._opened = false;
  }

  private getViewValueByOptions(): Observable<string> {
    const selectEvents = this.getSelectEventByOptions();
    return selectEvents.pipe(
      tap((option) => this.handlerSelectEvents(option)),
      pluck('viewValue')
    );
  }
  private handlerSelectEvents(option: Option): void {
    this.unselectOptions();
    option.selected = true;
    const { value } = option;
    this.value = value;
    this.valueChange.emit(value);
    this.close();
  }

  private getSelectEventByOptions(): Observable<Option> {
    const selectChanges = this.options.map(({ onSelectionChange }) => from(onSelectionChange));
    return scheduled(selectChanges, asapScheduler).pipe(mergeAll());
  }

  private unselectOptions() {
    this.options.forEach((option) => (option.selected = false));
  }
}
