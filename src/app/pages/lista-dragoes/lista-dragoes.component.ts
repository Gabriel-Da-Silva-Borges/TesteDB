import { Component } from '@angular/core';
import { DragoesService } from '../../services/dragoes.service';

@Component({
  selector: 'app-lista-dragoes',
  imports: [],
  templateUrl: './lista-dragoes.component.html',
  styleUrl: './lista-dragoes.component.scss'
})
export class ListaDragoesComponent {
  constructor(private dragoesService: DragoesService) {}

  ngOnInit(): void{
  }
}
