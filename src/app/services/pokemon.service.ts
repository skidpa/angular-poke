import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
    private pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    private pokeId = 0;
    private minPoke = Math.ceil(1);
    private maxPoke = Math.floor(808); // last actual pokemon is 807;
    constructor(private http: HttpClient) { }

    getRandomPoke(){
        let nextPoke = Math.floor(Math.random() * (this.maxPoke - this.minPoke)) + this.minPoke; 
        //console.log('next poke: ' + nextPoke);
        if(this.pokeId !== nextPoke){
            //this.pokeId = Math.floor(Math.random() * (this.maxPoke - this.minPoke)) + this.minPoke;
            this.pokeId = nextPoke;
        } else {
            this.getRandomPoke();
        }
    }

    public getPoke() {
        //this.pokeId +=1;
        this.getRandomPoke();
        //console.log(this.pokeUrl+this.pokeId);
        
        return this.http.get(this.pokeUrl + this.pokeId);        
    }
}
