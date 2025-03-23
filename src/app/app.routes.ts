import { Routes } from '@angular/router';
import { ListaDragoesComponent } from './pages/lista-dragoes/lista-dragoes.component';
import { CadastroDragoesComponent } from './pages/cadastro-dragoes/cadastro-dragoes.component';
import { DetalhesDragaoComponent } from './pages/detalhes-dragao/detalhes-dragao.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'lista', component: ListaDragoesComponent, canActivate: [authGuard] },
    { path: 'cadastro', component: CadastroDragoesComponent, canActivate: [authGuard] },
    { path: 'detalhes/:id', component: DetalhesDragaoComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
