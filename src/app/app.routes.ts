import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductComponent } from './components/exercicio/product/product.component';
import { ProductListComponent } from './components/exercicio/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    }, 
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'produtos',
        component: ProductListComponent
    }
];
