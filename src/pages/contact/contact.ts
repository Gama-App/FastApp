import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms/src/forms';
import { Storage } from '@ionic/storage/es2015/storage';

import {Camera} from 'ionic-native';

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

  contato: any;
  constructor(public navCtrl: NavController, angularFire: AngularFire,
     public navParams: NavParams, public fb:FormBuilder, public viewController: ViewController){
    this.contatos = navParams.get("contatos");
    this.contato = navParams.get("contato");
    if(this.contato != null){
      this.editContact(this.contato);
    }
  }

  saveContact(event):void {
      console.log(event);
      console.log(this.contatoForm.value.nome);
    if(this.contato == null){
      this.contatos.push({
        nome: this.contatoForm.value.nome,
        telefone: this.contatoForm.value.telefone,
        email: this.contatoForm.value.email
      });

      this.viewController.dismiss();
    }else{
      this.contatos.update(this.contato.$key,{
        nome: this.contatoForm.value.nome,
        telefone: this.contatoForm.value.telefone,
        email: this.contatoForm.value.email
      });
      this.viewController.dismiss();
    }
  }

  editContact(contato){
    this.contatoForm = this.fb.group({
      nome: [contato.nome, Validators.required],
      telefone: [contato.telefone, Validators.required],
      email: [contato.email, Validators.required]
    });
  }

  getPicture(){
    Camera.getPicture({
      destinationType : Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      targetHeight:640,
      correctOrientation:true
    }).then((_imagePath) => {

      alert("Certo " + _imagePath.message);
    }, (_error) =>{
      alert("Erro " + _error.message);
    });
  }
}
