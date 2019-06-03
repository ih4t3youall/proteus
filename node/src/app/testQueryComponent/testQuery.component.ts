import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
	selector: 'app-testQuery',
	templateUrl: './testQuery.component.html',
	styleUrls: ['./testQuery.component.css']
})

export class TestQueryComponent implements OnInit{

	name:string = '';
	constructor(private route:ActivatedRoute){
		//this.route.queryParams.subscribe();

	}

	ngOnInit(){
		this.name = this.route.snapshot.queryParams['code'];
	}

}
