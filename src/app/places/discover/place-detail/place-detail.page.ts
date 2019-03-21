import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private PlacesService: PlacesService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.PlacesService.getPlace(paraMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    // problem with pop : there must be a page on the stack of pages
    this.actionSheetCtrl.create({
      header: 'choose an action',
      buttons: [{
        text: 'Select Date',
        handler: () => {
          this.openBookingModal('select');

        }
      },
      {
        text: 'Random Date',
        handler: () => {
          this.openBookingModal('random');

        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }


    ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });

  }
  openBookingModal(mode: 'select'|'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: {
          selectedPlace: this.place
        }
        // id:
      })
      .then(modalEL => {
        modalEL.present();
        return modalEL.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('Booked!');
        }
      });
  }
}
