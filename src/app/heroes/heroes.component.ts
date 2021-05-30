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

  selectedHero?: Hero;
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

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}