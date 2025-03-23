import { Component, OnInit } from '@angular/core';
import { DragoesService } from '../../services/dragoes.service';
import { SharedModule } from '../../core/modules/shared/shared.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-dragoes',
  templateUrl: './lista-dragoes.component.html',
  imports: [
        SharedModule
      ],
  styleUrls: ['./lista-dragoes.component.scss']
})
export class ListaDragoesComponent implements OnInit {
  dragoes: any[] = [];
  edicao: { [id: string]: boolean } = {};

  constructor(
    private dragoeservice: DragoesService,
    private router: Router

  ) {}

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.dragoeservice.lista().subscribe(data => {
      this.dragoes = data.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
    });
  }

  habilitaEditar(id: string) {
    this.edicao[id] = !this.edicao[id];
  }

  salvarDragao(dragao: any) {
    this.dragoeservice.editar(dragao, dragao.id).subscribe(() => {
      this.edicao[dragao.id] = false;
    });
  }

  excluirDragao(id: number) {
    this.dragoeservice.excluir(id).subscribe(() => {
      this.carregaLista();
    });
  }

  visualizarDragao(id: string) {
    this.router.navigate([`/detalhes/${id}`]);
  }

  cadastroDragao() {
    this.router.navigate(['/cadastro']);
  }
}
