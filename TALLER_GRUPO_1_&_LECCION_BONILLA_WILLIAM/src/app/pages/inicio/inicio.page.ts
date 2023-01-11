import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

interface Componente {
icon: string;
name: string;
redirectTo: string;
}
@Component({
selector: 'app-inicio',
templateUrl: './inicio.page.html',
styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//crear nuevo listado
//componentes: any[] = [];
componentes: Componente[] = [
{
icon: 'apps',
name: 'HOJA DE ACCIONES',
redirectTo: '/action-sheet'
},
{
icon: 'alert',
name: 'ALERTA',
redirectTo: '/alert'
},
];
constructor() { }
ngOnInit() {
}

}

