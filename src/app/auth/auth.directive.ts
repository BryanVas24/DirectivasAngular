import { Directive, effect, inject, Input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  @Input({ required: true, alias: 'appAuth' }) userAcces!: Permission;
  private authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userAcces) {
        console.log('Mostraaaaas');
      } else {
        console.log('No mostraaaaas');
      }
    });
  }
}
