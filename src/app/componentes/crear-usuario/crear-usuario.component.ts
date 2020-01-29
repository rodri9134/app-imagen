import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  private formuser: FormGroup;
  public misusuarios: MimodeloService;
  constructor(private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {

    this.formuser = formBuilder.group({
      nombre: ['',[Validators.required]],
      imagen: ['']
    });
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.misusuarios);
    this.mimodeloService.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
