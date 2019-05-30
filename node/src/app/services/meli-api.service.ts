import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class MeliApiService {


	constructor(private http: HttpClient){
	}

	connectToMeli(){
	
		//this.http.get('https://localhost:8888/queryToMeli','biela twister');	
	
	}

	doTest(){
		return 'unProductoMalEzcrivido';
	
	}


}
