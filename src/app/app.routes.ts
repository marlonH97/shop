import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";

const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'hombre/:search', component: BuscarComponent },
    { path: 'mujer/:search', component: BuscarComponent },
    { path: 'ninos/:search', component: BuscarComponent },
    { path: 'junior/:search', component: BuscarComponent },
    { path: 'accesorios/:search', component: BuscarComponent },
    { path: 'ofertas/:search', component: BuscarComponent },
    { path: 'buscar/:search', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });