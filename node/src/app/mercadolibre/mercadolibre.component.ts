import { Component, OnInit } from '@angular/core';
import { Mercadolibre } from '../classes/mercadolibre.model';
import { MeliApiService } from '../services/meli-api.service';

@Component({
	selector: 'app-mercadolibre',
	templateUrl: './mercadolibre.component.html',
	styleUrls: ['./mercadolibre.component.css']

})
export class MercadolibreComponent implements OnInit{
	componentName= "mercadolibre";

	mercados: Mercadolibre [] = [
		new Mercadolibre("biela","1000","https://www.nitro.pe/images/2017/junio/biela.jpg"),
		new Mercadolibre("piston","750","http://www.indiapistons.com/img/content/pistons-inner-imgs.jpg")
	];

	constructor(meliApiService : MeliApiService){
		const name = meliApiService.doTest(); 
		this.mercados.push(new Mercadolibre(name,"123","foto"));
	}

	ngOnInit(){}

}
