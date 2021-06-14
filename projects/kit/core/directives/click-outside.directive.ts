import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[uClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output('clickOutside') public clickOutside: EventEmitter<void> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) public onMouseEnter(
    targetElement: EventTarget
  ): void {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
