import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private jsonData=[
    {
        "image":"forza5.jpg",
        "name":"Forza Horizon 5",
        "description":"Juego de carreras en mundo abierto",
        "price":"59,99"
    },
    {
        "image":"halo1.jpg",
        "name":"Halo 1",
        "description":"Juego de accion espacial",
        "price":"19,99"
    },
    {
        "image":"halo3.jpg",
        "name":"Halo 3",
        "description":"Conclusion de la mitica saga",
        "price":"39,99"
    }
    ]

  getJsonData(){
    return this.jsonData
  }

  constructor() { }
}
