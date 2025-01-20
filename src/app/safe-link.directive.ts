import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkdirective {
  queryParam = input('myApp');
  constructor() {
    console.info('Estoy funcionando');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const leavePage = window.confirm('¿Quieres abandonar la página?');

    if (leavePage) {
      //Esto usa type casting para decirle a ts que
      const addres = (event.target as HTMLAnchorElement).href;
      //Esto es para agregar a la url de un a que vienen de tu pagina
      (event.target as HTMLAnchorElement).href =
        addres + '?from=' + this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
