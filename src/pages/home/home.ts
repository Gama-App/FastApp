import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

//
// import {Platform} from 'ionic-angular';
// import {StatusBar, SQLite} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //
  // public database:SQLite;
  // public people: Array<Object>;
contatos: FirebaseListObservable<any>;

 teste:string = "Teste";
  constructor(public navCtrl: NavController, public AlertController: AlertController, angFire: AngularFire) {
    this.contatos = angFire.database.list("/Contatos");
  }


  addContact(){
    this.navCtrl.push(ContactPage, {
      contatos:this.contatos
    });
  }

  editContact(contato){
    this.navCtrl.push(ContactPage,{
      contato:contato
    })
  }

  deleteContact(contatoId){
    let prompt = this.AlertController.create({
        title:"Deletar Contato",
        buttons:[{
            text:"cancelar",
            handler: data => {
              console.log("Cancelado");
            }
          },
          {
            text:"deletar",
            handler: data =>{
              this.contatos.remove(contatoId);
            }
          }
        ]
    });
  }

    // platform.ready().then(() => {
    //        StatusBar.styleDefault();
    //        let db = new SQLite();
    //        db.openDatabase({
    //            name: "data.db",
    //            location: "default"
    //        }).then(() => {
    //            db.executeSql("CREATE TABLE IF NOT EXISTS contato (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, email TEXT)", {}).then((data) => {
    //                console.log("TABLE CREATED: ", data);
    //            }, (error) => {
    //                console.error("Unable to execute sql", error);
    //            })
    //        }, (error) => {
    //            console.error("Unable to open database", error);
    //        });
    //    });
    //
    //    platform.ready().then(() => {
    //         this.database = new SQLite();
    //         this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
    //             // this.refresh();
    //         }, (error) => {
    //             console.log("ERROR: ", error);
    //         });
    //     });
  // }

  //
  // public add() {
  //      this.database.executeSql("INSERT INTO contato (nome, telefone, email) VALUES ('Nic', 'Raboy', 'teste')", []).then((data) => {
  //          console.log("INSERTED: " + JSON.stringify(data));
  //      }, (error) => {
  //          console.log("ERROR: " + JSON.stringify(error.err));
  //      });
  //

  //  public refresh() {
  //      this.database.executeSql("SELECT * FROM contato", []).then((data) => {
  //          this.contatos = [];
  //          if(data.rows.length > 0) {
  //              for(var i = 0; i < data.rows.length; i++) {
  //                  this.contatos.push({nome: data.rows.item(i).nome, telefone: data.rows.item(i).telefone, telefone: data.rows.item(i).telefone });
  //              }
  //          }
  //      }, (error) => {
  //          console.log("ERROR: " + JSON.stringify(error));
  //      });
  //  }



}
