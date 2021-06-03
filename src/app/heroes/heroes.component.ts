import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes(); //call heroes service
  }

  heroes: Hero[] = [];

  getHeroes(): void {
    /*
    use a service to get 'heroes', gets called in ngOnInit() below
    
    using RxJS 'subscribe' to the service, basically async/await for data, 
    doesn't make a difference now bc it's mock data
    */
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if(!name) return;
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero); //add to heroes list for displaying
      })
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}