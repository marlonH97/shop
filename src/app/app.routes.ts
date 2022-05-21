import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";

const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'hombre', component: HombreComponent },
    { path: 'mujer', component: MujerComponent },
    { path: 'ninos', component: NinosComponent },
    { path: 'junior', component: JuniorComponent },
    { path: 'accesorios', component: AccesoriosComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'buscar/:search', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });