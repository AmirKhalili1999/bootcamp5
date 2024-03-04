import {Directive, HostListener, Input} from '@angular/core';

/**
 * @author Amir Hosein Khalilian
 * Project: nobaton
 * @version 0.0.1
 * @since 2023/08/10
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[allowedRegex]'
})
export class AllowedRegexDirective {

  /*
  use
  <input [allowedRegex]="^[0-9]+$" type="text" >
  */
  @Input() allowedRegex: string;

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    const k = event.target.value + event.key;

    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArroDown', 'Backspace', 'Tab', 'Alt',
      'Shift', 'Control', 'Enter', 'Delete', 'Meta'].includes(event.key)) {
      return;
    }
    const re = new RegExp(this.allowedRegex);
    if (!re.test(k)) {
      event.preventDefault();
    }
  }
}
