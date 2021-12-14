import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from '../seguridad.module';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  

  fgValidador : FormGroup = this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required]],
    'recaptcha':['',[Validators.required]]
  })

  siteKey:string="";
  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private router :Router
    ) {
      this.siteKey="6LdjdYkdAAAAAMIXJAdokj9pHt1am2GTSu1ZTFTI";
     }

  ngOnInit(): void {
  }

  
 
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let ClaveCifrada= cryptoJS.MD5(clave).toString();
    alert (clave);

    this.servicioSeguridad.Identificar(usuario,ClaveCifrada).subscribe((datos:any)=>{
      //ok
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error:any)=>{
      //ko
      alert("Datos Inválidos")
    })
  }
}
