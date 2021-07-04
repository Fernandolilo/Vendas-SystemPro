import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../app/service/storage.service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  email: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    let locauUser = this.storage.getLocalUser();
    if(locauUser && locauUser.email){
      this.email = locauUser.email;
    }

  }

}
