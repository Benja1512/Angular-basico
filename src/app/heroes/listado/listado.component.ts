import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroe: string[] = ['spiderman', 'ironman', 'hulk', 'tor', 'capitan america'];
  heroeBorrado: string='';

  borrarHeroe() {
    this.heroeBorrado = this.heroe.shift() || '';
   

  }


}
