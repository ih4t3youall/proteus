import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { MercadolibreComponent } from './mercadolibre/mercadolibre.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { TokenComponent} from './token/token.component';
import { TestComponent} from './testComponent/test.component';
import { TestQueryComponent} from './testQueryComponent/testQuery.component';
import { ListacomprasComponent } from './listaCompras/listaCompras.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{
	
		path:'', component:BoxComponent,
	},
	{
		//this is for url params
		path:'test/:id', component:TestComponent ,
	},
	{
		//this is for query
		path:'testQuery', component:TestQueryComponent ,
	},
	{
		path:'token', component:TokenComponent ,
	}

]

@NgModule({
	declarations: [
		AppComponent,
		BoxComponent,
		MercadolibreComponent,
		SpotifyComponent,
		ListacomprasComponent,
		TestComponent,
		TestQueryComponent,
		TokenComponent 

	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule, 
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
