import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  formData: any = {};

  submitForm() {
    Swal.fire('El formulario ha sido enviado')
    console.log(this.formData);
  }
}
