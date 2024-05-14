import { Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

export const routes: Routes = [

    { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
    { path: 'gastos', component: GastosComponent },
    { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
    { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' }

];
