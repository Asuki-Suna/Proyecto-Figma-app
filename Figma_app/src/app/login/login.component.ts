import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User
  public miToken: number;
  public userName: string | null;
  formData: any = {};

  mostrarDiv: boolean = false;
  light: boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router) {
    this.user = new User();
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
  public submit(): void {
    this.loginService.login(this.user).subscribe(
    (data: number) => {
    localStorage.setItem('userName', this.user.name);
    localStorage.setItem('personalToken',`${ data }`);
    this.router.navigate(['/home']).then(()=>{window.location.reload();});
    },
    (error: Error) => {
    console.error("Error al realizar el acceso- login");
    }
    )
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
      if (this.light) {
        document.documentElement.style.setProperty('--backgroundbody', '#0CBEED')
        document.documentElement.style.setProperty('--backgroundbuttonbot', '#5f5f5f')
        document.documentElement.style.setProperty('--colorleter', '#000000')
        document.documentElement.style.setProperty('--colorcard', '#ffffff')
        document.documentElement.style.setProperty('--cardleter', '#000000')
      } else {
        document.documentElement.style.setProperty('--backgroundbody', '#5f5f5f')
        document.documentElement.style.setProperty('--backgroundbuttonbot', '#DBD204')
        document.documentElement.style.setProperty('--colorleter', '#ffffff')
        document.documentElement.style.setProperty('--colorcard', '#000000')
        document.documentElement.style.setProperty('--cardleter', '#ffffff')
      }
    }

    changeColor() {
      document.documentElement.style.setProperty('--background', '#5f5f5f')
    }
    changeColorII() {
      document.documentElement.style.setProperty('--background2', '#414AFA')
    }
   
}