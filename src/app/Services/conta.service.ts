import { Http, Response } from "@angular/http";
import { Conta } from 'app/Models/Conta';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContaService {

  private contaUrl = 'http://localhost:8080/extrato';

  constructor(private _http: Http) { }

  listar(): Observable<Conta>{                
    return this._http.get(`${this.contaUrl}`).map(res=> <Conta>res.json());
  }

}

