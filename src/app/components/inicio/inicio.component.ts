import { Component, OnInit } from '@angular/core';
import { ConectadorService } from 'src/app/services/conectador.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  obData:Subscription;
  populares: any[] = [];

  constructor(private _sConectando:ConectadorService,private _sRouter: Router ) { }

  ngOnInit() {

      this._sConectando.obtenerPeliculas().subscribe((data)=>{
        console.log("profe")
        console.log(data)
        this.populares =  data.results;

        console.log("data.results?")
        console.log(data.results)
        console.log(this.populares)

      })

  }

}
