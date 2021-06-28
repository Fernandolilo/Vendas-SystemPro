import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/CredenciaisDTO';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  [x: string]: any;

  creds : CredenciaisDTO ={
    email: "",
    senha: ""   
  };


  constructor(
    public navCtrl: NavController, 
    public menu: MenuController) {
  
  
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.creds);
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {})
   
  }

}
