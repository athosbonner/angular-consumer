import { ContaService } from './Services/conta.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ContaService] 
})
export class AppComponent {
  getData :  string;
   constructor(private contaService : ContaService){}
}
