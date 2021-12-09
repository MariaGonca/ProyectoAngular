import { Component, Input, OnInit } from '@angular/core';
import { Minions } from 'src/app/shared2/interfaces2/minions';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.css']
})
export class MinionComponent implements OnInit {
  @Input()
  public minions: Minions;
  constructor() {
    this.minions = {
      name: '',
      image: '',
      description: '',
    }
  }


  ngOnInit(): void {
  }

}
