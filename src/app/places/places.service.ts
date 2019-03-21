import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'rabat', 'description',
// tslint:disable-next-line: max-line-length
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhFsbK_PB22R6pMoptP48aUnAotoh8LC4k31S1HnuXycVGPp0'
     , 999.999),

     new Place('p2', 'dar l9***', 'come to fuck',
     // tslint:disable-next-line: max-line-length
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHNvKnYtWbRVS-YZ0j_OY3imhbuy2DtzB1fq7A4_mRbJwFXskRg'
     , 100),
     new Place('p3', 'my house', 'welcome',
     // tslint:disable-next-line: max-line-length
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UwKHyV5zeFl5wkSa84akwa7tGjZYRanKC0t9aNbL85CPUIzP'
     , 100000000000)


  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
