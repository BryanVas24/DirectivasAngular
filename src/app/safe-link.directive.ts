import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkdirective {
  private hostElementref = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  //Asi se llama fuera (lo del alias)
  queryParam = input('myApp', { alias: 'appSafeLink' });
  constructor() {
    console.info('Estoy funcionando');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const leavePage = window.confirm('¿Quieres abandonar la página?');

    if (leavePage) {
      //Esto usa type casting para decirle a ts que
      const addres = this.hostElementref.nativeElement.href;
      //Esto es para agregar a la url de un a que vienen de tu pagina
      this.hostElementref.nativeElement.href =
        addres + '?from=' + this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
