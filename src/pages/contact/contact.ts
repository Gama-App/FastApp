import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms/src/forms';

@Component({
  templateUrl: '../contact/contact.html'
})

export class ContactPage{
  public contatoForm = this.fb.group({
    nome: ["", Validators.required],
    telefone: ["", Validators.required],
    email: ["", Validators.required]
  });


  constructor(public navCtrl: NavController, public NavParams: NavParams, public fb:FormBuilder){

  }

  saveContact(event) {
      console.log(event);
      console.log(this.contatoForm.value);
  }
}
