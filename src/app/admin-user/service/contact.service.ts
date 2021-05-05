import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
url = 'https://angular-material-api.azurewebsites.net/users';

constructor(private http: HttpClient) { }

getContact(): Observable<Contact[]>{
  return this.http.get<Contact[]>(this.url);
}

}
