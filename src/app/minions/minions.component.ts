import { Component, OnInit } from '@angular/core';
import { Minions } from '../shared2/interfaces2/minions';
import { MinionsService } from '../shared2/servicios2/minions.service';

@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css']
})
export class MinionsComponent implements OnInit {
public listadoMinions: Minions[];
  constructor(private minionService: MinionsService) { 
    this.listadoMinions = [];
  }

  ngOnInit(): void {
    this.recuperarMinions();
  }

  private recuperarMinions(): void {
    this.minionService.recuperarMinions().subscribe(
      (data) =>{
        this.listadoMinions = data;
      },
      (error) => {
        console.log('ERROR: ',error);
      },
      () => {
        console.log('Peticion realizado correctamente');
      }
    )
  }
}
