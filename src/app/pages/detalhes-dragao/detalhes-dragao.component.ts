import { Component } from '@angular/core';
import { DragoesService } from '../../services/dragoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../core/modules/shared/shared.module';

@Component({
  selector: 'app-detalhes-dragao',
  imports: [
          SharedModule
        ],
  templateUrl: './detalhes-dragao.component.html',
  styleUrl: './detalhes-dragao.component.scss'
})
export class DetalhesDragaoComponent {
  dragao: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dragoesService: DragoesService
  ) {}

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    if (id) {
      id = parseInt(id)
      this.dragoesService.dados(id).subscribe(data => {
        this.dragao = data;
      });
    }
  }

  voltar() {
    this.router.navigate(['/lista']);
  }
}
