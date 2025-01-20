import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {},
})
export class SafeLinkdirective {
  constructor() {
    console.info('Estoy funcionando');
  }
}
