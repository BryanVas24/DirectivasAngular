import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkdirective {
  constructor() {
    console.info('Estoy funcionando');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const leavePage = window.confirm('¿Quieres abandonar la página?');

    if (leavePage) {
      return;
    }
    event?.preventDefault();
  }
}
