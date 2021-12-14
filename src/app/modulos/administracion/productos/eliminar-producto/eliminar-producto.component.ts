import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  id:string="";
  constructor(private servicioProducto:ProductoService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.id = this.route.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.EliminarProducto();
    this.router.navigate(["/administracion/buscar-producto"]);
  }

  EliminarProducto(){
    this.servicioProducto.EliminarProducto(this.id).subscribe((datos:any)=>{
      alert("producto eliminado correctamente");
      
    },(error:any)=>{
      alert("Error!!! , no se ha eliminado")
    })

  }
}
