import { NavController } from '@ionic/angular';
import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place : Place;

  constructor(private route : ActivatedRoute, private PlacesService : PlacesService,
    private navCtrl : NavController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.PlacesService.getPlace(paraMap.get('placeId'));
    });
  }

}
