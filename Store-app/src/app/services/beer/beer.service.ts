import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  getAll():String[]{
    return [
      '/Store-app/src/assets/images/beers/c-2.jpg',
      '/Store-app/src/assets/images/beers/h-1.jpg',
      '/Store-app/src/assets/images/beers/b-3.jpg',
      '/Store-app/src/assets/images/beers/s-4.jpg',
      '/Store-app/src/assets/images/beers/w-5.jpg',
      '/Store-app/src/assets/images/beers/a-6.jpg'
    ]
  }
}
