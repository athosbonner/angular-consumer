import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { ContaService } from './conta.service';
@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
