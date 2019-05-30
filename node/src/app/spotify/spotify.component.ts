import { Component, OnInit } from '@angular/core';
import { SpotifyClass } from '../classes/spotifyClass.model';

@Component({
	selector: 'app-spotify',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit{

	songs: SpotifyClass [] =[
		new SpotifyClass ("skyclad","a silent whales of lunar sea","no string attached"),
		new SpotifyClass ("metallica","black album","Enter sandman")
	];

	constructor(){}
	ngOnInit(){}


}
