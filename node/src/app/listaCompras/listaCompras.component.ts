import { Component, OnInit } from '@angular/core';
import { ListaCompras } from '../classes/listacompras.model';
import { MeliApiService } from '../services/meli-api.service';

@Component({
	selector: 'app-listaCompras',
	templateUrl: './listaCompras.component.html',
	styleUrls: ['./listaCompras.component.css']

})
export class ListacomprasComponent implements OnInit{
	listas: ListaCompras [] = [
		new ListaCompras("productoA"),
		new ListaCompras("productoB")
	];

	constructor(private meliApiService : MeliApiService){
	
	}

	ngOnInit(){

	}

}
