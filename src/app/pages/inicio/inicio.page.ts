import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ComponentsModule } from 'src/app/components/components.module';

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
  componentes!: Observable<Componente[]>; 


  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
  this.componentes = this.dataService.getMenuOpts();
  }
  mostrarMenu() {
      this.menuCtrl.open('first');
    }
  }