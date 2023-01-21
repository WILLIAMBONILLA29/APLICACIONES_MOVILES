import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
selector: 'app-alert',
templateUrl: './alert.page.html',
styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
   
    handlerMessage = '';
    roleMessage = '';
   
    constructor(private alertCtrl: AlertController) { }
   
      
    ngOnInit() {     
    }
    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'PROMPT',
          
            buttons: ['CANCELAR','OK'],
           
            inputs:[
              {
                placeholder: 'Nombres'
            },
            {
                placeholder: 'apelliidos'
            },
            {
                placeholder: 'descripción materia'
            },
            {
                placeholder: 'https://ionicframework.com'
            },
            {
                type:'date',
                placeholder:'dd/mm/aaaa',
                min:1,
                max:100
            },
            {
                placeholder: 'clave'
            },
            {
                placeholder: 'Nickname (max 8 characters)',
                attributes:{
                    maxlength: 10
                }
            },
            {
                placeholder:'edad',
            }
        ]
    });await alert.present();
}
}
