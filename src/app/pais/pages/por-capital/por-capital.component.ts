import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino:string = '';
  hayError: boolean =false;
  paises : Country[] = [];


  constructor(private paisSerivice: PaisService) { }

  buscar( termino: string){
    this.hayError=false;
    this.termino = termino;

    this.paisSerivice.buscarCapital(termino).subscribe( (paises) => {
      
      console.log(paises);
      this.paises=paises;

    }, (err)=>{
      this.hayError=true;
      this.paises = [];
    });
  }

  

}
