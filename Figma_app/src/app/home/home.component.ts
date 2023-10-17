import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [
  //   trigger('movedown',[
  //     state('void', style({transform: 'translateY(0'})),
  //     state('*', style({transform: 'translateY(250%'})),
  //     transition('void <=> *', animate('300ms ease-in-out'))
  //   ])
  // ]
})
export class HomeComponent implements OnInit {

  color1= '#0CBEED';
  color2= '#5f5f5f';

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
      document.documentElement.style.setProperty('--background2', '#C72234');
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }

  public logout(): void {
    Swal.fire({
      title: 'Estás seguro!',
      text: 'quieres salir de la autentificación',
      icon: 'error',
      timer: 5000,
      confirmButtonText: 'CONFIRMAR',
      cancelButtonText: 'Cancelar. No salir.',
      showCancelButton: true,
      showCloseButton: true,
      preConfirm: (login) => {
      
      },
      allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {

    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      this.changeColorII();
    }
    window.location.reload();

    Swal.fire('Proceso terminado. Logout OK')
  }
  }) // fin de pregunta estas seguro?
  
  }


  title = 'Figma_app';

  mostrarDiv: boolean = false;

  light: boolean = true;


  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv;
    if (this.mostrarDiv) {
      document.documentElement.style.setProperty('--background', '#DBD204')
    } else {
      document.documentElement.style.setProperty('--background', '#5f5f5f')
    }
  }

  nocturne() {
    this.light = !this.light;
    if (this.light){
      document.documentElement.style.setProperty('--backgroundbody', '#0CBEED')
      document.documentElement.style.setProperty('--backgroundbuttonbot', '#5f5f5f')
      document.documentElement.style.setProperty('--colorleter', '#000000')
    } else{
      document.documentElement.style.setProperty('--backgroundbody', '#5f5f5f')
      document.documentElement.style.setProperty('--backgroundbuttonbot', '#DBD204')
      document.documentElement.style.setProperty('--colorleter', '#ffffff')
    }
  }

  irContacto() {
    this.router.navigate(['/contact'])
  }

  changeColor() {
    document.documentElement.style.setProperty('--background', '#5f5f5f')
  }
  changeColorII() {
    document.documentElement.style.setProperty('--background2', '#414AFA')
  }

  changeColorBody() {
    document.documentElement.style.setProperty('--backgroundbody', '#5f5f5f')
  }
}
