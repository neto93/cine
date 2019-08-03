import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SinopsisComponent } from './components/sinopsis/sinopsis.component';

const mis_Frutas: Routes = [
{
    path:'',
    component:InicioComponent
},
{
    path:'pelicula/:id',
    component:SinopsisComponent
},

{
    path:'inicio/:palabra',
    component:ResultadosComponent
},
{
    path:'**',
    component:NotFoundComponent
},

]


export const RUTAS_APP = RouterModule.forRoot(mis_Frutas);