import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MercadolibreItem } from '../classes/mercadolibre-item.model';


@Injectable({providedIn: 'root'})
export class MeliApiService {


	constructor(private http: HttpClient){
	}

	connectToMeli(mercados: MercadolibreItem[]){
		console.log('attemp to connecto to meli');
		while (mercados.length) { mercados.pop(); }
		//this.http.get<MercadolibreItem[]>('http://localhost:8888/getTest')
		this.http.get<MercadolibreItem[]>('http://localhost:8888/getMeliProductsFromApi')
			.subscribe( (x)=>{
				x.forEach( (y)=>{
					console.log(y.title);
					mercados.push(y);	
				});
				console.log("kill this subscription, numer 1");

			});	
	}

	sendTokenToNode(token:string){
		console.log('sending token to node');
		this.http.get<MercadolibreItem[]>('http://localhost:8888/').subscribe((response)=>{
			console.log(response);
			console.log("kill this subscription, numer 1");
		});
	}


}
