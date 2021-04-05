import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service'


@Directive({
  selector: '[appHideUnauthorized]'
})
export class HideUnauthorizedDirective implements OnInit {
  @Input('appHideUnauthorized') permission: [];
  constructor(
    private el: ElementRef,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (!this.permission.some((role) => role === this.authenticationService.role())) {
      this.el.nativeElement.style.display = 'none';
    }
  }

}
