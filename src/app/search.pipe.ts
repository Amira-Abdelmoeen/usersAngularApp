import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Users:any[], term:string): any[] {

    if (term==undefined || term=="" || term=="   " ) 
    {
      return Users;
    }
    return Users.filter( (item)=>item.name.toLowerCase().includes(term.toLowerCase()) ||item.username.toLowerCase().includes(term.toLowerCase()) );

  }

}
