import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/serv/request.service';
import { User } from 'src/app/model/user';
import { LocationService } from 'src/app/serv/location.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  users:User[]
  message:string = ''

  constructor(public svc:RequestService,
    public loc:LocationService,
    public activatedRoute:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.svc.getUsers().
    subscribe(data => this.users = data)
  }
  
  logIn(){

    for(let i = 0; i<this.users.length;i++){
      if(this.username.value == this.users[i].username){
        this.loc.selectedUser = this.users[i]
        this.router.navigate(['homepage'])          
          break;
      } else{
        this.message = 'wrong data'
      }
    }
  }
  

}
