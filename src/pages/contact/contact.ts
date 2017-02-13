import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms/src/forms';
import { Storage } from '@ionic/storage/es2015/storage';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: '../contact/contact.html'
})

export class ContactPage{
  public contatoForm = this.fb.group({
    nome: ["", Validators.required],
    telefone: ["", Validators.required],
    email: ["", Validators.required]
  });

  contatos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, angularFire: AngularFire, public navParams: NavParams, public fb:FormBuilder){
    this.contatos = navParams.get("contatos");
  }

  saveContact(event):void {
      console.log(event);
      console.log(this.contatoForm.value.nome);

      this.contatos.push({
        nome: this.contatoForm.value.nome,
        telefone: this.contatoForm.value.telefone,
        email: this.contatoForm.value.email

      });
  }
}
