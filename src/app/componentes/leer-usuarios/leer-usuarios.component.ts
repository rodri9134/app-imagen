import { Component, OnInit } from '@angular/core';
import { Mimodelo } from 'src/app/modelo/mimodelo';
import { MimodeloService } from 'src/app/services/mimodelo.service';

@Component({
  selector: 'app-leer-usuarios',
  templateUrl: './leer-usuarios.component.html',
  styleUrls: ['./leer-usuarios.component.scss']
})
export class LeerUsuariosComponent implements OnInit {
  private usuarios: Mimodelo;
  constructor(private mimodeloService: MimodeloService) { }

  ngOnInit() {
    this.mimodeloService.getUsuarios().subscribe(
      res => {

        console.log(res);
        this.usuarios = res;
      },
      err => {
        console.log(err);
      }
    );


  }

}
