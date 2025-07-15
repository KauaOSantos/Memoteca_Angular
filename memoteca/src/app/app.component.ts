import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";

@Component({
  // standalone: true, 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, CabecalhoComponent]
})
export class AppComponent {
  title = 'memoteca';
}
