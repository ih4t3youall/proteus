import { Component, OnInit } from '@angular/core';
import { ListaCompras } from '../classes/listacompras.model';

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

	constructor(){}
	ngOnInit(){}

}
