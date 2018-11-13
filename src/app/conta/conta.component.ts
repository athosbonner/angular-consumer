import { Component, OnInit } from '@angular/core';
import { ContaService } from 'app/conta.service';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';
import { DoesZapCodeSpaceFlag } from 'v8';
import { Conta } from 'app/Models/Conta';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

 public conta: Conta;
  lista: any[];
  isLoading = true;
  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contaService.listar().subscribe(
      (dados: Conta) => {
        this.isLoading = false;
        this.conta = dados;
      },
      error => alert(error),
      () => console.log(this.conta)
      );
  }

}
