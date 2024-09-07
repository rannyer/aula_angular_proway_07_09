import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    }, 
    {
        path:'usuarios',
        component: UsuariosComponent
    }
];
