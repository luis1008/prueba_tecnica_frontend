import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ProductosComponent } from './components/productos/productos';
import { UsuariosComponent } from './components/usuarios/usuarios';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
