import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/serv/request.service';
import { Post } from 'src/app/model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  posts:Post[]

  constructor(public svc:RequestService,
    public router:Router) { }

  ngOnInit() {
    this.svc.getLastPosts().
    subscribe(data => this.posts = data)
  }

  moveTo(page: string){
    this.router.navigate([page])
  }

}
