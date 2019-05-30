import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { MercadolibreComponent } from './mercadolibre/mercadolibre.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ListacomprasComponent } from './listaCompras/listaCompras.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		BoxComponent,
		MercadolibreComponent,
		SpotifyComponent,
		ListacomprasComponent 
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule 
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
