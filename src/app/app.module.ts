import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { DerniersProduitsComponent } from './derniers-produits/derniers-produits.component';
import { OneProduitComponent } from './one-produit/one-produit.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    DerniersProduitsComponent,
    OneProduitComponent,
    NousContacterComponent,
    BoutiqueComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
