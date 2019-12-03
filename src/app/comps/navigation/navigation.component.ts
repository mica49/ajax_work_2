import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
  }

  moveToPage(page:string){
    this.router.navigate([page])
  }

}