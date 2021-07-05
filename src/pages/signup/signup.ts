import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {


   this.formGroup = this.formBuilder.group({
        nome: ['Fernando da Silva', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['fernando@gmail.com', [Validators.required, Validators.email]],
        tipo : ['1', [Validators.required]],
        cpfOuCnpj : ['12312312311', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha : ['123123', [Validators.required]],
        logradouro : ['rua viena', [Validators.required]],
        numero : ['56', [Validators.required]],
        complemento : ['', []],
        bairro : ['vitoria', []],
        cep : ['12312000', [Validators.required]],
        telefone1 : ['91234-1234', [Validators.required]],
        telefone2 : ['94141-000', []],
        telefone3 : ['', []],
        estadoId : [null, [Validators.required]],
        cidadeId : [null, [Validators.required]]   
      });

  }

  signupUser() {
    console.log("Enviou o form");
  }
}
