import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/service/auth.service';
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
    public menu: MenuController,
    public auth: AuthService) {  
  
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
      this.auth.successfulLogin(response.headers.get('Authorization'));
      console.log(this.creds);
      this.navCtrl.setRoot('CategoriasPage');
    
      },
      error => {})
   
  }

}
