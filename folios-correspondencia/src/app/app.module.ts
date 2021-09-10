import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoliosComponent } from './folios/folios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OficiosComponent } from './oficios/oficios.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: 'oficios', component: OficiosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FoliosComponent,
    OficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
