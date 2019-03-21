import { Booking } from './bookings.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings : Booking[]=[
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
  }
  ];

  get bookings(){
    return [...this._bookings];
  }

  constructor() { }
}
