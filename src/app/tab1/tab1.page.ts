import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';

  listaVideos: IFilme[] = [
    {
      nome: 'RoboCop (1987)',
      lancamento: '08/10/1987',
      duracao:'1h 42m',
      classificacao: 72,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fR0lfsB7YRNy2NQo9Ii7CPnYp31.jpg',
      generos:['Ação', 'Thriller', 'Ficção','científica']
    },
    {
      nome: 'RoboCop (1987) 2',
      lancamento: '08/10/1987',
      duracao:'1h 42m',
      classificacao: 72,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fR0lfsB7YRNy2NQo9Ii7CPnYp31.jpg',
      generos:['Ação', 'Thriller', 'Ficção','científica']
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
    ) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Realmente favoritar o filme',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim Favoritar',
          handler: () => {
            this.chamarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async chamarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}
