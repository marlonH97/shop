import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//rutas
import { APP_ROUTING } from '../app/app.routes';

///componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MasBuscadosComponent } from './components/mas-buscados/mas-buscados.component';
import { MasBucadosServiceService } from './services/mas-bucados-service.service';
import { HttpClientModule } from "@angular/common/http";
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ResultsPipe } from './pipes/results.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MasBuscadosComponent,
    BuscarComponent,
    ResultsPipe,
    LoadingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    MasBucadosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
