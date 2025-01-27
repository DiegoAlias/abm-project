import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SupplierComponent } from './components/supplier/supplier.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirige a /users por defecto
  { path: 'users', component: UserComponent }, // Ruta para UserComponent
  { path: 'suppliers', component: SupplierComponent }, // Ruta para SupplierComponent
];
