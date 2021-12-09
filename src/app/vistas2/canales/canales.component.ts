import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/shared2/interfaces2/canal';
import { EntradaService } from 'src/app/shared2/servicios2/entrada.service';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})

export class CanalesComponent implements OnInit {

  public listadoCanales: Canal[];
  constructor(private entradaService: EntradaService) {
    this.listadoCanales = [];
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }



  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoCanales = data;
      },
      (error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    )
  }
}

