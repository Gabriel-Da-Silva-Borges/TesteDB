import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private autenticado = false;

  constructor(private router: Router) {}

  login(usuario: string, senha: string): boolean {
    if (usuario === 'Daenerys' && senha === 'Targaryen') {
      this.autenticado = true;
      localStorage.setItem('login', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.autenticado = false;
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }

  testaLogin(): boolean {
    return localStorage.getItem('login') === 'true';
  }
}
