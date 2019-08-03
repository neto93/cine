import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imahen'
})
export class ImahenPipe implements PipeTransform {

  transform(pelicula: any, ...args: any[]): any {
    let url = "http://image.tmdb.org/t/p/w400";
    return url + pelicula.poster_path;
  }

}
