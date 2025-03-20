import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SharedModule } from '../../core/modules/shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
      SharedModule
    ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (this.loginService.login(this.usuario, this.senha)) {
      this.router.navigate(['/lista']);
    } else {
      this.mensagemErro = 'Usuário ou senha inválidos';
    }
  }
}
