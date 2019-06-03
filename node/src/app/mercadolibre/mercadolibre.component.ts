import { Component, OnInit } from '@angular/core';
import { MercadolibreItem } from '../classes/mercadolibre-item.model';
import { MeliApiService } from '../services/meli-api.service';

@Component({
	selector: 'app-mercadolibre',
	templateUrl: './mercadolibre.component.html',
	styleUrls: ['./mercadolibre.component.css']

})
export class MercadolibreComponent implements OnInit{
	componentName= "mercadolibre";

	mercados: MercadolibreItem [] = [];

	constructor(private meliApiService : MeliApiService){
		this.meliApiService.connectToMeli(this.mercados); 
	}

	refresh(){
		this.meliApiService.connectToMeli(this.mercados); 
	}
	testNode(){
		this.meliApiService.sendTokenToNode('miParameter'); 
	}

	ngOnInit(){

	}

}
