import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  paginateUsers : any[] = []
  pageSize : number = 5;
  currentPage : number = 1;
  pageNumber : number = 1;
  maxSize : number = 0;
  
  UsersList : any[] = [];
  inputSearch :string ="";


  constructor(private UsersService:UsersService){}

  async ngOnInit() {
    this.UsersList = await this.getUsers()
     console.log(this.UsersList);
     
    this.maxSize = this.UsersList.length
    this.getPaginateTasks()
  }

  async getUsers():Promise<any[]>{
    try {
      const response : any[] = await firstValueFrom(this.UsersService.userApi())
      return response 
    } catch (error) {
      console.log(error);
      return []
      
    }
   
  }

  SortByNameAsc(){
    this.UsersList.sort((a:any, b:any) => a.name.localeCompare(b.name));
  
  }
  SortByNameDesc(){
    this.UsersList.sort((a:any, b:any) => b.name.localeCompare(a.name));
  
  }


  SortByUserNameAsc(){
    this.UsersList.sort((a:any, b:any) => a.username.localeCompare(b.username));
  }
  SortByUserNameDesc(){
    this.UsersList.sort((a:any, b:any) => b.username.localeCompare(a.username));
  }

  SortByEmailAsc(){
    this.UsersList.sort((a:any, b:any) => a.email.localeCompare(b.email));
    
  }
  SortByEmailDesc(){
    this.UsersList.sort((a:any, b:any) => b.email.localeCompare(a.email));
    
  }
  
  paginate(pageNumber : number){
    this.pageNumber = pageNumber;
    this.getPaginateTasks()
}
 getPaginateTasks(){
   this.paginateUsers = this.UsersList
    .slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);

 }



}
