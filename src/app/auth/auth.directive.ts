import {
  Directive,
  effect,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  @Input({ required: true, alias: 'appAuth' }) userAcces!: Permission;
  private authService = inject(AuthService);
  //referencia a la plantilla donde se esta usando,
  private templateRef = inject(TemplateRef);
  //te da acceso a el lugar donde se referencia en le DOm
  private viewContainerRef = inject(ViewContainerRef);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userAcces) {
        //Toma el contenido de el ng-template
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
