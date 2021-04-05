import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Observable } from 'rxjs';
const BASE_PATH = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllPatients(): Observable<User[]> {
        return this.http.get<User[]>(`${BASE_PATH}/users/pacientes`);
    }

    savePatient(body: User): Observable<User> {
      return this.http.post<User>(`${BASE_PATH}/users/paciente`, body);
    }

    getAllDentists(): Observable<User[]> {
        return this.http.get<User[]>(`${BASE_PATH}/users/dentistas`);
    }

    saveDentist(body: User): Observable<User> {
      return this.http.post<User>(`${BASE_PATH}/users/dentista`, body);
    }
}
