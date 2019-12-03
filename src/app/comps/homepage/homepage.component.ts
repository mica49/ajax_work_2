import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/serv/location.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public loc:LocationService) { }

  ngOnInit() {
  }

}
