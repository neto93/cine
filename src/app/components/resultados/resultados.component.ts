import { Component, OnInit } from '@angular/core';
import { ConectadorService } from 'src/app/services/conectador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  total_pages: number;
  page: number ;
  palabrita:string;

  resultados:any[] = [];

  constructor(private _sconectando:ConectadorService,
              private _sActivatedRoutes:ActivatedRoute
              ) { }

  ngOnInit() {
    
    this._sActivatedRoutes.params.subscribe(parametros =>{
    let { palabra } = parametros
    this.palabrita = palabra;
    this.page = 1
    this.buscarPeliculas(this.palabrita,this.page);
    });

  }

  buscarPeliculas(palabra:string,page:number){
    this._sconectando.buscarPelicula(palabra,page).subscribe((rpta:any)=>{
      console.log(rpta)
      this.resultados = rpta.results;
      this.total_pages = rpta.total_pages;
      this.page = rpta.page;

    })
  }


  ir(num:number){
    let nuevaPAgina = this.page + num;
    if(nuevaPAgina <= this.total_pages && nuevaPAgina >= 1){

      this._sconectando.buscarPelicula(this.palabrita,nuevaPAgina).subscribe((otraPag:any)=>{

        console.log("deberiamos tener otra pagina: xd")
          console.log(otraPag)
          this.resultados = otraPag.results;
          this.total_pages = otraPag.total_pages;
          this.page = otraPag.page;

      })

    }
  }



}
