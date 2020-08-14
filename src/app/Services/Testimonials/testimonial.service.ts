import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Itestimonial } from 'src/app/ViewModel/Interfaces/itestimonial';
@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private _http:HttpClient) 
  {
   
  }
   /*getALLPersons():Observable<Itestimonial[]>{
     return this._http.get<Itestimonial[]>(`${environment.ApiURL5}/`);
   }*/
   getALLPersons():any{
     return this._http.get(`${environment.ApiURL5}/`);

   }
}
