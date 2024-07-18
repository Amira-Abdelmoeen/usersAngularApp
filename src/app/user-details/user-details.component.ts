import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{

  userId:string=""
  user : any = []

    constructor(private _ActivatedRoute:ActivatedRoute , private _UsersService :UsersService){}

    ngOnInit(): void {
      this._ActivatedRoute.params.subscribe( {
        next : (p) =>{ 
          this.userId = p["id"] 
          console.log(this.userId);
          
        },
        error : (err) => {console.log(err)}
      })

       this.getUserById(this.userId)
    }

    getUserById(id:string){
      this._UsersService.getUserByIdApi(id).subscribe({
        next: (res) =>{
          this.user =  res
          
        }
      })
    }










}
