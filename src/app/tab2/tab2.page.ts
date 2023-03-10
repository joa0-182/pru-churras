import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  tentosTime1 = 0;
  tentosTime2 = 0;
  pontosTime1 = 0;
  pontosTime2 = 0;


  mudarPontos(valor : number){
    this.valendo = valor;

    if(this.valendo === 3){
      this.presentToast('Truco Marreco');
    }

    if(this.valendo === 6){
      this.presentToast('SEEIIIISSSSS!!!!!');
    }

    if(this.valendo === 9){
      this.presentToast('NOOOVEEEEEE!!!!');
    }

    if(this.valendo === 12){
      this.presentToast('DOZEEEE LADRÃOoooooo!!!')
    }
  }

  aumentarTento(time: number){
    if(time === 1){
      this.tentosTime1 += this.valendo;
    }
    else if(time === 2){
      this.tentosTime2 += this.valendo;
    }

    this.valendo = 1;
    this.verificarVencedor();
  }

  diminuirTento(time: number){
    if(time === 1){
      this.tentosTime1 -= this.valendo;
    }
    else if(time === 2){
      this.tentosTime2 -= this.valendo;
    }

    this.valendo = 1;

    if(this.tentosTime1 < 0){
      this.tentosTime1 = 0;
    }
    if(this.tentosTime2 < 0){
      this.tentosTime2 = 0;
    }
  }

  verificarVencedor(){
    if(this.tentosTime1 >= 12){
      this.presentAlert('Time 1 Ganhou a Partida?',1);
    }
    else if(this.tentosTime2 >= 12){
      this.presentAlert('Time 2 Ganhou a Partida?',2);
    }
  }

  novaJogada(){
    this.valendo = 1;
    this.tentosTime1 = 0;
    this.tentosTime2 = 0;
  }

  recomecar(){
    this.novaJogada();
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;
  }
  constructor(private alertController: AlertController,private toastController : ToastController) {}

  async presentAlert(message: string,time:number) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      message: message,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Ganhou!',
          role: 'confirm',
          handler: () => {
            if(time === 1){
              this.pontosTime1++;
            }else if(time === 2){
              this.pontosTime2++;
            }

            this.novaJogada();
          },
        },
      ],
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'middle'
    });

    await toast.present();
  }

}
