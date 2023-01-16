import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string;
  telefono: number;
  email: string;
  notas: string;
  contactos: any[];
  toggle: boolean;

  constructor(public alerta: AlertController) {
    this.nombre = '';
    // this.telefono = 0;
    this.email = '';
    this.notas = '';
    this.contactos = [];
    this.toggle = false;
  }


  addContacto(){
    // eslint-disable-next-line eqeqeq
    if (this.nombre == '') {
      // alert('Escribe los campos correctamente');
      this.errorAlert();
    }
    else{
      const nuevoContacto = {
        name: this.nombre,
        tel: this.telefono,
        correo: this.email,
        note: this.notas
      };

      this.contactos.push(nuevoContacto);
      // console.log(this.fruitList);
      this.nombre = '';
      this.telefono = 0;
      this.email = '';
      this.notas = '';
      console.log(this.contactos);
      this.basicAlert();
    }
  }
//AlvaroEmmanuel Herrera Anda
  deleteCont(indiceCont){
    this.contactos.splice(indiceCont, 1);
  }

  async basicAlert() {
    const alert = await this.alerta.create({
      header: 'ÉXITO',
      subHeader: 'Contacto Agregado',
      // message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alerta.create({
      header: 'ALGO SALIÓ MAL',
      subHeader: 'Llena los campos correctamente',
      // message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertConfirm(indiceCont) {
    const alert = await this.alerta.create({
      header: 'ELIMINAR CONTACTO!',
      message: 'Por favor confirma que quieres eliminar a ' + this.contactos[indiceCont].name + ' de tus contactos',
      buttons: [
        {
          text: 'Cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: (blah) => {
            console.log('Confirm Okay');
            this.contactos.splice(indiceCont, 1);
          }
        }
      ]
    });

    await alert.present();
  }

}
