import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards-pelicula',
  templateUrl: './cards-pelicula.component.html',
  styleUrls: ['./cards-pelicula.component.css']
})
export class CardsPeliculaComponent implements OnInit {
  @Input() ListaDePeliculas: any[] = [];
  constructor(private _srouter: Router) { }

  ngOnInit() {
  }


  verPelicula(peli: any) {

    let peliculaId;

    peliculaId = peli.id;

    console.log(peliculaId)

    this._srouter.navigate(["/pelicula", peliculaId]);
  }


  
}
