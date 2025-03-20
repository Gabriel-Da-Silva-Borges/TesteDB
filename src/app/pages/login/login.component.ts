import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
      RouterOutlet,
      FormsModule
  
    ],
  styleUrls: ['./login.component.css']
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
