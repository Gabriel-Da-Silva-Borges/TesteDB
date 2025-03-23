import { Component } from '@angular/core';
import { DragoesService } from '../../services/dragoes.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../core/modules/shared/shared.module';

@Component({
  selector: 'app-cadastro-dragoes',
  imports: [
        SharedModule
      ],
  templateUrl: './cadastro-dragoes.component.html',
  styleUrl: './cadastro-dragoes.component.scss'
})
export class CadastroDragoesComponent {
  dragao = {
    name: '',
    type: '',
    createdAt: new Date().toISOString()
  };
  mensagemErro = '';

  constructor(private dragoesService: DragoesService, private router: Router) {}

  criaDragao() {    
    if (!this.dragao.name || !this.dragao.type) {
      this.mensagemErro = 'Por favor, preencha todos os campos.';
      return;
    }

    this.dragoesService.salvar(this.dragao).subscribe(() => {
      this.router.navigate(['/lista']);
    });
  }

  voltar() {
    this.router.navigate(['/lista']);
  }
}
