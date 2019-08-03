import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ConectadorService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';

  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  constructor(private _shttp:HttpClient) { }


obtenerPeliculas():Observable<any>{
  let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=en-US`;

  return this._shttp.get(moviesUrl)
}


buscarPelicula(palabra:string,page:number){
  let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=en-US&query=${palabra}&page=${page}`
  return this._shttp.get(searchUrl)
}


ObtnerSinopsis(id:number){

  let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=en-US`   
  return this._shttp.get(detailsUrl)
}
















}


