import { Tip } from './../../shared/tip';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import {HousesProvider} from './../../providers/housesService'

@Component({
  selector: 'page-tip-detail',
  templateUrl: 'tip-detail.html'
})
export class TipDetailPage {
    tip: Tip;
    userID: number
    typeDescriptor: string;
    constructor(public navCtrl: NavController,public navParams: NavParams, 
                public housesProvider: HousesProvider, public modalCtrl: ModalController, 
                public viewCtrl: ViewController, private inAppBrowser: InAppBrowser) {

        const tipTypes = [
            'Financial Aid',
            'State/Federal Programs',
            'Building Professionals',
            'Products',
            'Videos',
            'Technology'
        ];
        this.tip  = navParams.get('tip');
        this.userID  = navParams.get('userID');
        this.typeDescriptor = tipTypes[this.tip.type];
    }

    save() {
        //TODO: clarify requirement on saving tips to a user or specific house.
        this.housesProvider.saveTip(this.userID, this.tip.id )
            .then( data => {
                console.log(data);
            }
        );
        this.dismiss();
    }

    openTipLink(){
        
        const options: InAppBrowserOptions = {
          zoom: 'no'
        }
  
          // Opening a URL and returning an InAppBrowserObject
        const browser = this.inAppBrowser.create(this.tip.website, '_system', options);
  
         // Inject scripts, css and more with browser.X
    }

    ionViewDidLoad() {
    //do the setups here for view did load
    }   


    dismiss() {
        this.viewCtrl.dismiss();
    }

}