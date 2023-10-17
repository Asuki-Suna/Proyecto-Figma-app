import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  public miToken: number;
  public userName: string | null;

  constructor(private router: Router) {
    this.miToken = 0;
    this.userName = "";
  }

  ngOnInit(): void {
    this.changeColor()
    this.changeColorII()
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
      document.documentElement.style.setProperty('--background2','#C72234');
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }

  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      this.changeColorII();
    }
  }



  title = 'Figma_app';

  mostrarDiv: boolean = false;

  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv;
    if(this.mostrarDiv){
    document.documentElement.style.setProperty('--background','#DBD204')
    }else{
      document.documentElement.style.setProperty('--background','#5f5f5f')
    }
  }

  irContacto() {
    this.router.navigate(['/contact'])
  }

  changeColor(){
    document.documentElement.style.setProperty('--background','#5f5f5f')
  }
  changeColorII(){
    document.documentElement.style.setProperty('--background2','#414AFA')
  }
}
