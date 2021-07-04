import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../app/service/domain/Cliente.service';
import { StorageService } from '../../app/service/storage.service';
import { API_CONFIG } from '../../config/api.config';
import { ClienteDTO } from '../../models/cliente.dto';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let locauUser = this.storage.getLocalUser();
    if(locauUser && locauUser.email){
      this.clienteService.findByEmail(locauUser.email)
        .subscribe(response => {
          this.cliente = response;
          this.getImageIfExistis();         
      },
      error => {});
    }

  }

  getImageIfExistis() {
    this.clienteService.getImageFromBucket(this.cliente.id)
      .subscribe(response =>{
        this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
    error => {});
  }
}
