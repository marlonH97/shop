import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HombreComponent } from "./pages/hombre/hombre.component";
import { MujerComponent } from "./pages/mujer/mujer.component";
import { JuniorComponent } from "./pages/junior/junior.component";
import { NinosComponent } from "./pages/ninos/ninos.component";
import { AccesoriosComponent } from "./pages/accesorios/accesorios.component";
import { OfertasComponent } from "./pages/ofertas/ofertas.component";
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