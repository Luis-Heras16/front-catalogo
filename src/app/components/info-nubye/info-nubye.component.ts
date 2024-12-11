import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
export interface Empresa {
  _id:         string;
  id:          string;
  nombre:      string;
  descripcion: string;
  vacantes:    Vacante[];
  contacto:    Contacto;
}

export interface Contacto {
  telefono: string;
  emails:   string[];
  _id:      string;
}

export interface Vacante {
  _id:         string;
  titulo:      string;
  descripcion: string;
  requisitos:  string[];
}

@Component({
  selector: 'app-info-nubye',
  standalone: true,
  imports: [],
  templateUrl: './info-nubye.component.html',
  styleUrl: './info-nubye.component.css'
})
export class InfoNubyeComponent implements OnInit {
  private apiService = inject(ApiService)
  public title:string = ""
   public description:string = ""
   public vacantes:Vacante[]=[]
  ngOnInit(): void {
    this.apiService.getEmpresa("E002").subscribe((res:Empresa | undefined) => {
      console.log(res)
      if (res){
        this.title = res.nombre
        this.description = res.descripcion
        this.vacantes = res.vacantes
      }
    })
  }


}
