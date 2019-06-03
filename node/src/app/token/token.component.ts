import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { MeliApiService } from '../services/meli-api.service';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
	styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit{

	token:string = '';
	constructor(private route:ActivatedRoute,private meliApiService : MeliApiService ){
		

	}

	ngOnInit(){
		this.token = this.route.snapshot.queryParams['code'];
	}

}
