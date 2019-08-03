import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConectadorService } from 'src/app/services/conectador.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent implements OnInit {

  pelicula: any = {};

  constructor(private _srouter: ActivatedRoute, 
    private _conected:ConectadorService,
    private location: Location) { }

  ngOnInit() {
    this._srouter.params.subscribe(parametros =>{
      console.log(parametros)
      let { id } = parametros

      this._conected.ObtnerSinopsis(id).subscribe( rpta=>{
        console.log(" esto debe seeer: ");
        console.log(rpta);
        this.pelicula = rpta
        
      })

    


    })
  }

  regresar(){
    this.location.back();
  }

}
