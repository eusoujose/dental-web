import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private pacientesTabSource = new BehaviorSubject<boolean>(false);
  pacientesTab = this.pacientesTabSource.asObservable();

  private dentistasTabSource = new BehaviorSubject<boolean>(false);
  dentistasTab = this.dentistasTabSource.asObservable();
  constructor() { }

  changePacientesTab(pacientesTab: boolean) {
    this.pacientesTabSource.next(pacientesTab);
  }

  changeDentistasTab(dentistasTab: boolean) {
    this.dentistasTabSource.next(dentistasTab);
  }
}
