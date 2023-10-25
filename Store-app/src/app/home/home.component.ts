import { Component } from '@angular/core';
import { BeerService } from '../services/beer/beer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  beers:String[] = [];
  constructor(private beerService:BeerService) {}

  ngOnInit(): void{
    this.beers = this.beerService.getAll();
  }

}
