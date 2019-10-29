import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    pokeArr = [];
    nextIn = 10;
    isUpdatable = true;
    barNum = 0;
    pBar = '';
    some;
    constructor(private pokemonService: PokemonService) { }

    pokeTimer(seconds){
        var counter = seconds;

        this.some = setInterval(()=>{
            this.getPoke();
            this.barNum = 0;
        }, 60000);
    }

    barCounter(seconds){
        //var count = seconds;
        let sBar = setInterval(() => {
            //console.log(this.barNum);
            this.barNum++;
            //this.pBar = this.barNum + '%';
            //console.log(this.barNum);
            /*if(this.barNum == 117){
                this.barNum = seconds;
                this.pBar = '0';
            }*/
        },600);
    }

    setUpdatable(){
        this.isUpdatable = !this.isUpdatable;
        console.log('updatable: ' + this.isUpdatable);
    }

    getPoke() {
        this.pokemonService.getPoke().subscribe((data: any[]) => {
            //console.log(data);
            //console.log(data.name);
            //console.log(data.sprites.front_default)
            this.pokeArr = data;
        });
        //clearInterval(this.bar);
        //this.bar = setInterval(() => {console.log('hej')}, 10000);
    }

    ngOnInit() {
        //console.log(this.pokemonService.getPoke());
        this.getPoke();
        this.pokeTimer(this.nextIn);
        this.barCounter(0);
  }

}
