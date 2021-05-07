import { ElementRef } from '@angular/core';

export const overwriteStyle = (
  { nativeElement }: ElementRef,
  oldClassName: string,
  newClassName: string
): void => {
  nativeElement.classList.remove(oldClassName);
  nativeElement.classList.add(newClassName);
};
