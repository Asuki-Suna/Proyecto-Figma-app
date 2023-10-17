import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'Figma_app';

  mostrarDiv: boolean = false;

  toggleDiv(){
    this.mostrarDiv = !this.mostrarDiv;
  }

  irContacto(){
    this.router.navigate(['/contact'])
  }
}
